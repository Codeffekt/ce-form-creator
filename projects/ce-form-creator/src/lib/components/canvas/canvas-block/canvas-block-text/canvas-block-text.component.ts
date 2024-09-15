import { Component, Input } from '@angular/core';
import { FormInstanceBase, FormBlock } from '@codeffekt/ce-core-data';
import { CanvasBlockComponentType } from '../../../../core';

@Component({
  selector: 'ce-canvas-block-text',
  templateUrl: './canvas-block-text.component.html',
  styleUrls: ['./canvas-block-text.component.scss']
})
export class CanvasBlockTextComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
