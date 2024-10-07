import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBlock, FormInstanceBase } from '@codeffekt/ce-core-data';
import { MatIconModule } from '@angular/material/icon';
import { CeFormCreatorPipesModule } from '../../../../core/pipes';

@Component({
  selector: 'ce-canvas-block-factory',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CeFormCreatorPipesModule
  ],
  templateUrl: './canvas-block-factory.component.html',
  styleUrls: ['./canvas-block-factory.component.scss']
})
export class CanvasBlockFactoryComponent {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
