import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

export interface ValidatorsDialogConfig {
  validators: string[];
}

@Component({
  selector: 'ce-validators-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './validators-dialog.component.html',
  styleUrls: ['./validators-dialog.component.scss']
})
export class ValidatorsDialogComponent {

  static open(dialog: MatDialog, config: ValidatorsDialogConfig) { 
    return dialog.open(ValidatorsDialogComponent, { data: config });
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public config: ValidatorsDialogConfig,
    private dialogRef: MatDialogRef<ValidatorsDialogComponent>,
  ) {    
  }

  select(validator: string) {
    this.dialogRef.close(validator);
  }

  onNoClick() {
    this.dialogRef.close();
  }  


}
