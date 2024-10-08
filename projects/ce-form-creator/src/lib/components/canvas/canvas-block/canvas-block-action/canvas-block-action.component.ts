import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CeFormCreatorPipesModule } from '../../../../core/pipes';
import { FormBlock, FormInstanceBase } from '@codeffekt/ce-core-data';

@Component({
  selector: 'ce-canvas-block-action',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CeFormCreatorPipesModule,
  ],
  templateUrl: './canvas-block-action.component.html',
  styleUrls: ['./canvas-block-action.component.scss']
})
export class CanvasBlockActionComponent {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
