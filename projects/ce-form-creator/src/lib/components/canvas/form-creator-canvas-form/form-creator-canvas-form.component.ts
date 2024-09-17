import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormBlock } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DndDropEvent } from 'ngx-drag-drop';
import { filter, Observable } from 'rxjs';
import {
    CreatorSelectionService,
    FormRootUpdateService
} from '../../../core/services';
import { CanvasForm, FormCreatorContext } from '../../../core/models';
import { CanvasNodeLayoutConfig } from '@codeffekt/ce-canvas-nodes';

@UntilDestroy()
@Component({
    selector: 'ce-form-creator-canvas-form',
    templateUrl: './form-creator-canvas-form.component.html',
    styleUrls: ['./form-creator-canvas-form.component.scss']
})
export class CeFormCreatorCanvasFormComponent implements OnInit {
    @Input() canvasForm!: CanvasForm;
    @Input() layout!: CanvasNodeLayoutConfig;

    @Output() formChangedEvent: EventEmitter<CanvasForm> = new EventEmitter();
    selection$: Observable<FormCreatorContext | undefined> = this.selectionService.selectionChanges();
    isActive: boolean = false;

    @HostListener('click', ['$event'])
    onSelect(event: MouseEvent) {        
        event.preventDefault();
        this.selectForm(this.canvasForm);
    }


    constructor(
        private selectionService: CreatorSelectionService,
        private formRootUpdateService: FormRootUpdateService,
    ) {      
    }
    
    ngOnInit(): void {
        this.listenSelectionChanges();
        this.listenFormChanges();
        console.log("CANVAS FORM", this.canvasForm, this.layout);
    }

    onDropElement(event: DndDropEvent) {
        const block = event.data;
        const res = this.formRootUpdateService
            .addNewBlock(this.canvasForm, block, { emitEvent: true });
        this.canvasForm = res.form;
        this.formChangedEvent.emit(this.canvasForm);

        this.selectionService.selectBlock(this.canvasForm, res.block);
    }

    selectForm(form: CanvasForm) {
        this.selectionService.selectForm(form);
    }

    selectBlock(form: CanvasForm, block: FormBlock) {
        this.selectionService.selectBlock(form, block);
    }

    trackBlock(index: number, block: FormBlock) {
        return block ? block.field : undefined;
    }

    setCurrentForm(form: CanvasForm) {
        this.canvasForm = form;        
    }

    private listenSelectionChanges() {
        this.selectionService.selectionChanges()
            .pipe(untilDestroyed(this))
            .subscribe(selection => {
                this.isActive = selection?.form.form.id === this.canvasForm.form.id;
            });
    }

    private listenFormChanges() {
        this.formRootUpdateService.listenUpdates(this.canvasForm.form.id)
            .pipe(
                untilDestroyed(this),
                filter(form => !!form))
            .subscribe(form => this.setCurrentForm(form!));
    }

}