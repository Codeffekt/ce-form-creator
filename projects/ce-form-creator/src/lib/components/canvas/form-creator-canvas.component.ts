import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FormControlsBuilder } from '@codeffekt/ce-core';
import { FormBlock, FormInstance, FormRoot } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DndDropEvent } from 'ngx-drag-drop';
import { filter, Observable, tap } from 'rxjs';
import { CreatorSelectionService, FormCreatorContext, FormRootUpdateService } from '../../core';

@UntilDestroy()
@Component({
  selector: 'ce-form-creator-canvas',
  templateUrl: './form-creator-canvas.component.html',
  styleUrls: ['./form-creator-canvas.component.scss']
})
export class CeFormCreatorCanvasComponent implements OnInit {

  @Input() forms!: FormRoot[];
  @Output() formChangedEvent: EventEmitter<FormRoot> = new EventEmitter();

  form!: FormRoot;
  formGroup!: UntypedFormGroup;
  selection$: Observable<FormCreatorContext | undefined> = this.selectionService.selectionChanges();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private formControlsBuilder: FormControlsBuilder,
    private selectionService: CreatorSelectionService,
    private formRootUpdateService: FormRootUpdateService,
  ) { }

  ngOnInit(): void {
    this.listenSelectionChanges();
    this.listenFormChanges();
  }

  onDropElement(event: DndDropEvent) {
    const block = event.data;
    const res = this.formRootUpdateService
      .addNewBlock(this.form, block, { emitEvent: false });
    this.form = res.form;
    this.updateFormGroup(this.form);
    this.formChangedEvent.emit(this.form);

    this.selectionService.selectBlock(this.form, res.block);
  }

  selectForm(form: FormRoot) {
    this.selectionService.selectForm(form);
  }

  selectBlock(form: FormRoot, block: FormBlock) {
    this.selectionService.selectBlock(form, block);
  }

  setCurrentForm(form: FormRoot) {
    this.form = form;
    this.updateFormGroup(form);
  }

  private listenFormChanges() {
    this.formRootUpdateService.listenUpdates(this.form.id)
      .pipe(        
        untilDestroyed(this),
        tap(form => console.log(form)),
        filter(form => !!form))
      .subscribe(form => this.setCurrentForm(form!));
  }

  private listenSelectionChanges() {
    this.selectionService.selectionChanges()
      .pipe(untilDestroyed(this))
      .subscribe(selection => {
        if (selection)
          this.setCurrentForm(selection?.form)
      });
  }

  private updateFormGroup(form: FormRoot) {
    const controls = this.formControlsBuilder.build(<FormInstance>form);
    this.formGroup = this.formBuilder.group(controls);
  }
}
