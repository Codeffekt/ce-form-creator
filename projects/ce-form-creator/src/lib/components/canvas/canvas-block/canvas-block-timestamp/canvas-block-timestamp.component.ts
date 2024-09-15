import { Component, Input } from '@angular/core';
import { FormInstanceBase, FormBlock } from '@codeffekt/ce-core-data';
import { CanvasBlockComponentType } from '../../../../core';

@Component({
  selector: 'ce-canvas-block-timestamp',
  templateUrl: './canvas-block-timestamp.component.html',
  styleUrls: ['./canvas-block-timestamp.component.scss']
})
export class CanvasBlockTimestampComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
