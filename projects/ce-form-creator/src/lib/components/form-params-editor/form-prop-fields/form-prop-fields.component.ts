import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormRoot } from '@codeffekt/ce-core-data';
import { FieldsDialogComponent } from '../../dialogs/fields-dialog/fields-dialog.component';
import { filter } from 'rxjs';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { MatIconModule } from '@angular/material/icon';
import { DndDropEvent, DndModule } from 'ngx-drag-drop';
import { DndFormService, PropFieldsService } from '../../../core/services';
import { CanvasBlockComponentType } from '../../../core';

@Component({
  selector: 'ce-form-prop-fields',
  imports: [
    CommonModule,
    MatDialogModule,
    CeLayoutModule,
    MatIconModule,
    DndModule,
    FieldsDialogComponent,
  ],
  templateUrl: './form-prop-fields.component.html',
  styleUrl: './form-prop-fields.component.scss'
})
export class FormPropFieldsComponent {

  @Input() root!: FormRoot;
  @Output() rootChanges: EventEmitter<FormRoot> = new EventEmitter();

  dndFormService = inject(DndFormService);
  propFieldsService = inject(PropFieldsService);

  private dialog = inject(MatDialog);

  currentFields: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['root']) {
      this.updateCurrentFields();
    }
  }

  addField() {

    const dialogRef = FieldsDialogComponent.open(this.dialog, {
      fields: Object.keys(this.root.content),
    });

    dialogRef.afterClosed().pipe(
      filter(field => field !== undefined)
    ).subscribe(field => {
      if (!this.currentFields.includes(field)) {
        this.currentFields.push(field);
        this.onRootUpdate();
      }      
    });
  }

  deleteField(field: string) {
    if (this.currentFields.includes(field)) {
      this.currentFields = this.currentFields.filter(v => v !== field);
      this.onRootUpdate();
    }
  }

  onDropElement(event: DndDropEvent) {
    const canvasBlockComp = event.data as CanvasBlockComponentType;    

    const field = this.propFieldsService.generatePropField(
      this.root,
      canvasBlockComp
    );

    if(!field || this.currentFields.includes(field)) {
      return;
    }    

    this.currentFields.push(field);
    this.onRootUpdate();
  }

  private onRootUpdate() {
    if (!this.root.params) {
      this.root.params = {
        fields: []
      };
    }
    this.root.params.fields = this.currentFields;
    this.rootChanges.emit(this.root);
  }

  private updateCurrentFields() {
    this.currentFields = this.root?.params?.fields ?? [];
  }

}
