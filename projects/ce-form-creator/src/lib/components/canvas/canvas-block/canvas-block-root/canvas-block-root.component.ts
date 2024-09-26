import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasBlockComponentType } from '../../../../core/models';
import { FormBlock, FormInstanceBase } from '@codeffekt/ce-core-data';
import { MatIconModule } from '@angular/material/icon';
import { CeFormCreatorPipesModule } from '../../../../core/pipes';

@Component({
  selector: 'ce-canvas-block-root',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CeFormCreatorPipesModule
  ],
  templateUrl: './canvas-block-root.component.html',
  styleUrls: ['./canvas-block-root.component.scss']
})
export class CanvasBlockRootComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
