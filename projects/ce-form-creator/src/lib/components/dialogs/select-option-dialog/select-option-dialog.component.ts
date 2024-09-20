import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface SelectOptionDialogConfig {
  existingElt?: { label: string, value: string };
}

@Component({
  selector: 'ce-select-option-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,  
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './select-option-dialog.component.html',
  styleUrls: ['./select-option-dialog.component.scss']
})
export class SelectOptionDialogComponent implements OnInit {  

  formGroup!: UntypedFormGroup;

  static open(dialog: MatDialog, config: SelectOptionDialogConfig) {
    return dialog.open(SelectOptionDialogComponent, { data: config });
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public config: SelectOptionDialogConfig,
    private fb: UntypedFormBuilder,
    private dialogRef: MatDialogRef<SelectOptionDialogComponent>,
  ) {
  }

  ngOnInit(): void {
    this.createForm();    
  }

  private createForm() {
    this.formGroup = this.fb.group({
      label: [this.config.existingElt?.label ?? "", Validators.required],
      value: [this.config.existingElt?.value ?? "", Validators.required],
    });    
  }  

  dismiss() {
    this.dialogRef.close();
  }
}
