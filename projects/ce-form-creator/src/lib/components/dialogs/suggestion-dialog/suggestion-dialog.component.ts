import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface SuggestionOptionDialogConfig {
  existingElt?: string;
}

@Component({
  selector: 'ce-suggestion-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './suggestion-dialog.component.html',
  styleUrls: ['./suggestion-dialog.component.scss']
})
export class SuggestionDialogComponent implements OnInit {

  formGroup!: UntypedFormGroup;

  static open(dialog: MatDialog, config: SuggestionOptionDialogConfig) {
    return dialog.open(SuggestionDialogComponent, { data: config });
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public config: SuggestionOptionDialogConfig,
    private fb: UntypedFormBuilder,
    private dialogRef: MatDialogRef<SuggestionDialogComponent>,
  ) {
  }

  ngOnInit(): void {
    this.createForm();    
  }

  private createForm() {
    this.formGroup = this.fb.group({
      suggestion: [this.config.existingElt ?? "", Validators.required],      
    });    
  }  

  dismiss() {
    this.dialogRef.close();
  }
}
