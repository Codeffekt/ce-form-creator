import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { MatIconModule } from '@angular/material/icon';
import { CanvasBlockComponentType, CreatorFormsService, FormCreatorContext } from '../../../core';
import { DndFormService, PropFieldsService } from '../../../core/services';
import { filter } from 'rxjs';
import { FieldsDialogComponent } from '../../dialogs';
import { DndDropEvent, DndModule } from 'ngx-drag-drop';

@Component({
  selector: 'ce-form-block-prop-fields',
  imports: [
    CommonModule,
    MatDialogModule,
    CeLayoutModule,
    MatIconModule,
    DndModule,
    FieldsDialogComponent,
  ],
  templateUrl: './form-block-prop-fields.component.html',
  styleUrls: ['./form-block-prop-fields.component.scss']
})
export class FormBlockPropFieldsComponent {

  @Input() context!: FormCreatorContext;

  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  dndFormService = inject(DndFormService);
  propFieldsService = inject(PropFieldsService);

  private dialog = inject(MatDialog);

  private formsService = inject(CreatorFormsService);

  currentFields: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['context']) {
      this.updateCurrentFields();
    }
  }

  addField() {

    if (!this.block?.root) {
      return;
    }

    const formRoot = this.formsService.getFormRoot(this.block.root);

    if (!formRoot) {
      return;
    }

    const dialogRef = FieldsDialogComponent.open(this.dialog, {
      fields: Object.keys(formRoot.content),
    });

    dialogRef.afterClosed().pipe(
      filter(field => field !== undefined)
    ).subscribe(field => {
      if (!this.currentFields.includes(field)) {
        this.currentFields.push(field);
        this.onBlockUpdate();
      }      
    });
  }

  deleteField(field: string) {
    if (this.currentFields.includes(field)) {
      this.currentFields = this.currentFields.filter(v => v !== field);
      this.onBlockUpdate();
    }
  }

  onDropElement(event: DndDropEvent) {

    if (!this.block?.root) {
      return;
    }

    const formRoot = this.formsService.getFormRoot(this.block.root);

    if (!formRoot) {
      return;
    }

    const canvasBlockComp = event.data as CanvasBlockComponentType;

    const field = this.propFieldsService.generatePropField(
      formRoot,
      canvasBlockComp
    );

    if(!field || this.currentFields.includes(field)) {
      return;
    }

    this.currentFields.push(field);
    this.onBlockUpdate();
  }

  private onBlockUpdate() {
    if (!this.block?.params?.validators) {
      this.block!.params = {
        ...this.block?.params,
        fields: []
      };
    }
    this.block!.params.fields = this.currentFields;
    this.blockChanges.emit(this.context);
  }

  private updateCurrentFields() {
    this.currentFields = this.block?.params?.fields ?? [];
  }

  private get block() { return this.context.block };

}
