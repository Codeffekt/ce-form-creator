import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInstanceBase, FormBlock } from '@codeffekt/ce-core-data';
import { CanvasBlockComponentType } from '../../../../core/models';
import { MatIconModule } from '@angular/material/icon';
import { CeFormCreatorPipesModule } from '../../../../core/pipes';

@Component({
  selector: 'ce-canvas-block-root-array',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CeFormCreatorPipesModule,
  ],
  templateUrl: './canvas-block-root-array.component.html',
  styleUrls: ['./canvas-block-root-array.component.scss']
})
export class CanvasBlockRootArrayComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
