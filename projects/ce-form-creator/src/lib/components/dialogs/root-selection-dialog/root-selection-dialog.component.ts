import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { FormRoot } from '@codeffekt/ce-core-data';

export interface RootSelectionDialogConfig {
  roots: FormRoot[];
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
  ],
  selector: 'ce-root-selection-dialog',
  templateUrl: './root-selection-dialog.component.html',
  styleUrls: ['./root-selection-dialog.component.scss']
})
export class RootSelectionDialogComponent {

  static open(dialog: MatDialog, config: RootSelectionDialogConfig) { 
    return dialog.open(RootSelectionDialogComponent, { data: config });
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public config: RootSelectionDialogConfig,
    private dialogRef: MatDialogRef<RootSelectionDialogComponent>,
  ) {    
  }

  select(root: FormRoot) {
    this.dialogRef.close(root);
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
