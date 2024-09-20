import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { MatIconModule } from '@angular/material/icon';
import { CreatorFormsService, FormCreatorContext } from '../../../core';
import { filter } from 'rxjs';
import { FieldsDialogComponent } from '../../dialogs';

@Component({
  selector: 'ce-form-block-prop-fields',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    CeLayoutModule,
    MatIconModule,
    FieldsDialogComponent,
  ],
  templateUrl: './form-block-prop-fields.component.html',
  styleUrls: ['./form-block-prop-fields.component.scss']
})
export class FormBlockPropFieldsComponent {

  @Input() context!: FormCreatorContext;

  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  private dialog = inject(MatDialog);

  private formsService = inject(CreatorFormsService);

  currentFields: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['context']) {
      this.updateCurrentFields();
    }
  }

  addField() {

    if(!this.block?.root) {
      return;
    }

    const formRoot = this.formsService.getFormRoot(this.block.root);

    if(!formRoot) {
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
      }
      this.onBlockUpdate();
    });
  }

  deleteField(field: string) {    
    if(this.currentFields.includes(field)) {
      this.currentFields = this.currentFields.filter(v => v !== field);
      this.onBlockUpdate();
    }
  }

  private onBlockUpdate() {
    if(!this.block?.params?.validators) {
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
