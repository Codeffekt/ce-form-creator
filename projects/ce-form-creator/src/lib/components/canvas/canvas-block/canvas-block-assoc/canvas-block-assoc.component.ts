import { Component, Input } from '@angular/core';
import { FormInstanceBase, FormBlock } from '@codeffekt/ce-core-data';
import { CanvasBlockComponentType } from '../../../../core';

@Component({
  selector: 'ce-canvas-block-assoc',
  templateUrl: './canvas-block-assoc.component.html',
  styleUrls: ['./canvas-block-assoc.component.scss']
})
export class CanvasBlockAssocComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
