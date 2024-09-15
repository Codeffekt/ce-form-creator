import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormBlock, FormRoot } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DndDropEvent } from 'ngx-drag-drop';
import { filter, Observable } from 'rxjs';
import {
    CreatorSelectionService,
    FormRootUpdateService
} from '../../../core/services';
import { FormCreatorContext } from '../../../core/models';

@UntilDestroy()
@Component({
    selector: 'ce-form-creator-canvas-form',
    templateUrl: './form-creator-canvas-form.component.html',
    styleUrls: ['./form-creator-canvas-form.component.scss']
})
export class CeFormCreatorCanvasFormComponent implements OnInit {
    @Input() form!: FormRoot;

    @Output() formChangedEvent: EventEmitter<FormRoot> = new EventEmitter();
    selection$: Observable<FormCreatorContext | undefined> = this.selectionService.selectionChanges();
    isActive: boolean = false;

    @HostListener('click', ['$event'])
    onSelect(event: MouseEvent) {
        event.preventDefault();
        this.selectForm(this.form);
    }


    constructor(
        private selectionService: CreatorSelectionService,
        private formRootUpdateService: FormRootUpdateService,
    ) {      
    }
    
    ngOnInit(): void {
        this.listenSelectionChanges();
        this.listenFormChanges();
    }

    onDropElement(event: DndDropEvent) {
        const block = event.data;
        const res = this.formRootUpdateService
            .addNewBlock(this.form, block, { emitEvent: true });
        this.form = res.form;
        this.formChangedEvent.emit(this.form);

        this.selectionService.selectBlock(this.form, res.block);
    }

    selectForm(form: FormRoot) {
        this.selectionService.selectForm(form);
    }

    selectBlock(form: FormRoot, block: FormBlock) {
        this.selectionService.selectBlock(form, block);
    }

    trackBlock(index: number, block: FormBlock) {
        return block ? block.field : undefined;
    }

    setCurrentForm(form: FormRoot) {
        this.form = form;        
    }

    private listenSelectionChanges() {
        this.selectionService.selectionChanges()
            .pipe(untilDestroyed(this))
            .subscribe(selection => {
                this.isActive = selection?.form.id === this.form.id;
            });
    }

    private listenFormChanges() {
        this.formRootUpdateService.listenUpdates(this.form.id)
            .pipe(
                untilDestroyed(this),
                filter(form => !!form))
            .subscribe(form => this.setCurrentForm(form!));
    }

}