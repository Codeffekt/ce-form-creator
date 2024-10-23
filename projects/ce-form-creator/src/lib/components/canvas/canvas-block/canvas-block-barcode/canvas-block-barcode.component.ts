import { Component, Input } from '@angular/core';
import { FormInstanceBase, FormBlock } from '@codeffekt/ce-core-data';
import { CeFormCreatorPipesModule } from '../../../../core/pipes';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CanvasBlockComponentType } from '../../../../core/models';
import { BlockRowComponent } from "../../../layout/block-row/block-row.component";

@Component({
  selector: 'ce-canvas-block-barcode',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CeFormCreatorPipesModule,
    BlockRowComponent,
],
  templateUrl: './canvas-block-barcode.component.html',
  styleUrls: ['./canvas-block-barcode.component.scss']
})
export class CanvasBlockBarcodeComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
