import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

export interface FieldsDialogConfig {
  fields: string[];
}

@Component({
  selector: 'ce-fields-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './fields-dialog.component.html',
  styleUrls: ['./fields-dialog.component.scss']
})
export class FieldsDialogComponent {

  static open(dialog: MatDialog, config: FieldsDialogConfig) { 
    return dialog.open(FieldsDialogComponent, { data: config });
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public config: FieldsDialogConfig,
    private dialogRef: MatDialogRef<FieldsDialogComponent>,
  ) {    
  }

  select(validator: string) {
    this.dialogRef.close(validator);
  }

  onNoClick() {
    this.dialogRef.close();
  }  

}
