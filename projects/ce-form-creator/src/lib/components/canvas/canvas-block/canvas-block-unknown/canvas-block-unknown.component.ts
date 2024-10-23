import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBlock, FormInstanceBase } from '@codeffekt/ce-core-data';
import { MatIconModule } from '@angular/material/icon';
import { CeFormCreatorPipesModule } from '../../../../core/pipes/pipes.module';
import { CanvasBlockComponentType } from '../../../../core/models';
import { BlockRowComponent } from "../../../layout/block-row/block-row.component";

@Component({
  selector: 'ce-canvas-block-unknown',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CeFormCreatorPipesModule,
    BlockRowComponent,
  ],
  templateUrl: './canvas-block-unknown.component.html',
  styleUrls: ['./canvas-block-unknown.component.scss']
})
export class CanvasBlockUnknownComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
