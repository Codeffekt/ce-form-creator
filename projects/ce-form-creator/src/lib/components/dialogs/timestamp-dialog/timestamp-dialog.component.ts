import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBlock } from '@codeffekt/ce-core-data';

export interface TimeStampDialogConfig {
  block: FormBlock;
}

@Component({
  selector: 'ce-timestamp-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './timestamp-dialog.component.html',
  styleUrls: ['./timestamp-dialog.component.scss']
})
export class TimestampDialogComponent implements OnInit {

  static open(dialog: MatDialog, config: TimeStampDialogConfig) { 
    return dialog.open(TimestampDialogComponent, { data: config });
  }

  formGroup!: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public config: TimeStampDialogConfig,
    private dialogRef: MatDialogRef<TimestampDialogComponent>,
    private fb: UntypedFormBuilder,
  ) {    
  }

  ngOnInit(): void {
    this.createForm();
  }

  submit() {
    this.dialogRef.close(this.formGroup.value);
  }

  dismiss() {
    this.dialogRef.close();
  }  

  private createForm() {
    this.formGroup = this.fb.group({
      format: [this.config.block.params?.format],
      timeFormat: [this.config.block.params?.timeFormat],    
    });
  }
}
