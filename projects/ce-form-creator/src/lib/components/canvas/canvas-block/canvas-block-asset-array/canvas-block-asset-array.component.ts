import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasBlockComponentType } from '../../../../core/models';
import { FormBlock, FormInstanceBase } from '@codeffekt/ce-core-data';
import { MatIconModule } from '@angular/material/icon';
import { CeFormCreatorPipesModule } from '../../../../core/pipes';

@Component({
  selector: 'ce-canvas-block-asset-array',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CeFormCreatorPipesModule,
  ],
  templateUrl: './canvas-block-asset-array.component.html',
  styleUrls: ['./canvas-block-asset-array.component.scss']
})
export class CanvasBlockAssetArrayComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
