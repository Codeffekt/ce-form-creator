import { Component, Input } from '@angular/core';
import { CanvasBlockComponentType } from '../../../../core/models';
import { FormInstanceBase, FormBlock } from '@codeffekt/ce-core-data';

@Component({
  selector: 'ce-canvas-block-asset',
  templateUrl: './canvas-block-asset.component.html',
  styleUrls: ['./canvas-block-asset.component.scss']
})
export class CanvasBlockAssetComponent implements CanvasBlockComponentType {
  
  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;


}
