import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CeFormsPipesModule, CeLayoutModule } from '@codeffekt/ce-core';
import { DndModule } from 'ngx-drag-drop';
import { CeFormCreatorPipesModule } from '../../../../core/pipes/pipes.module';
import { CeFormTreeInputModule } from './form-tree-input/form-tree-input.module';
import { FormBlocksTreeNodeComponent } from './form-tree-node/form-tree-node.component';
import { FormBlocksTreeComponent } from './form-tree.component';

@NgModule({
  declarations: [
    FormBlocksTreeComponent,
    FormBlocksTreeNodeComponent,
  ],
  imports: [
    CommonModule,
    CeFormsPipesModule,
    CeLayoutModule,
    MatIconModule,
    CeFormCreatorPipesModule,
    CeFormTreeInputModule,
    DndModule
  ],
  exports: [
    FormBlocksTreeComponent
  ]
})
export class CeFormBlocksTreeModule { }
