import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInstanceBase, FormBlock } from '@codeffekt/ce-core-data';
import { CanvasBlockComponentType } from '../../../../core/models';
import { MatIconModule } from '@angular/material/icon';
import { CeFormCreatorPipesModule } from '../../../../core/pipes';

@Component({
  selector: 'ce-canvas-block-object',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CeFormCreatorPipesModule,
  ],
  templateUrl: './canvas-block-object.component.html',
  styleUrls: ['./canvas-block-object.component.scss']
})
export class CanvasBlockObjectComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
