import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormRoot } from '@codeffekt/ce-core-data';

export interface RootSelectionDialogConfig {
  roots: FormRoot[];
}

@Component({
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
