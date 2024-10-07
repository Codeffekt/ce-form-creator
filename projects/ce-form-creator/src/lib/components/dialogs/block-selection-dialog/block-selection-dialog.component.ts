import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormBlock, FormBlockType, FormRoot, FormUtils } from '@codeffekt/ce-core-data';

export interface BlockSelectionDialogConfig {
  type: FormBlockType;
  root: FormRoot;
}

@Component({
  selector: 'ce-block-selection-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './block-selection-dialog.component.html',
  styleUrls: ['./block-selection-dialog.component.scss']
})
export class BlockSelectionDialogComponent {

  blocks: FormBlock[] = [];

  static open(dialog: MatDialog, config: BlockSelectionDialogConfig) { 
    return dialog.open(BlockSelectionDialogComponent, { data: config });
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public config: BlockSelectionDialogConfig,
    private dialogRef: MatDialogRef<BlockSelectionDialogComponent>,
  ) {    
    this.blocks = FormUtils.getBlocks(config.root)
        .filter(b => b.type === config.type);
  }

  select(block: FormBlock) {
    this.dialogRef.close(block);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
