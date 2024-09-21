import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormBlock, FormRoot, FormUtils, IndexType } from '@codeffekt/ce-core-data';

export interface ArrayIndexDialogConfig {
  root: FormRoot;
}

@Component({
  selector: 'ce-array-index-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './array-index-dialog.component.html',
  styleUrls: ['./array-index-dialog.component.scss']
})
export class ArrayIndexDialogComponent {

  indexBlocks: FormBlock[] = [];

  static open(dialog: MatDialog, config: ArrayIndexDialogConfig) { 
    return dialog.open(ArrayIndexDialogComponent, { data: config });
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public config: ArrayIndexDialogConfig,
    private dialogRef: MatDialogRef<ArrayIndexDialogComponent>,
  ) {    
    this.indexBlocks = FormUtils.getBlocks(config.root)
        .filter(b => b.type === "index");
  }

  select(block: FormBlock) {
    this.dialogRef.close(block);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
