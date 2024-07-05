import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CeCodeEditorModule } from '@codeffekt/ce-code-editor';
import { CeFormModule, CeFormsModule, CeFormsPipesModule, CeLayoutModule, FormBlockStoreService, FormControlsBuilder, FormStyleBuilder } from '@codeffekt/ce-core';
import { DndModule } from 'ngx-drag-drop';
import { CoreDirectivesModule } from '../../core';
import { CeFormCreatorPipesModule } from '../../core/pipes/pipes.module';
import { FormViewComponent } from '../form-view/form-view.component';
import { FormBlockEditComponent } from './canvas-block/canvas-block.component';
import { CeFormCreatorCanvasComponent } from './form-creator-canvas.component';
import { ZoomPanContainerComponent } from './zoom-pan-container/zoom-pan-container.component';
import { CanvasBlockArrayComponent } from './canvas-block/canvas-block-array/canvas-block-array.component';
import { CanvasBlockAssocComponent } from './canvas-block/canvas-block-assoc/canvas-block-assoc.component';
import { CeFormCreatorCanvasFormComponent } from './form-creator-canvas-form/form-creator-canvas-form.component';
import { CanvasConnectorsComponent } from './canvas-connectors/canvas-connectors.component';

@NgModule({
  declarations: [
    CeFormCreatorCanvasComponent,
    CeFormCreatorCanvasFormComponent,
    FormBlockEditComponent,
    CanvasBlockArrayComponent,
    CanvasBlockAssocComponent,
    CanvasConnectorsComponent,
  ],
  imports: [
    CommonModule,
    CeLayoutModule,
    CeFormsModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    CeFormsPipesModule,
    DndModule,
    CeCodeEditorModule,
    CeFormCreatorPipesModule,
    CoreDirectivesModule,
    CeFormModule,
    FormViewComponent,
    ZoomPanContainerComponent,
    DragDropModule
  ], exports: [
    CeFormCreatorCanvasComponent
  ], providers: [
    FormStyleBuilder,
    FormControlsBuilder,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ]
})
export class CeFormCreatorCanvasModule { 
  constructor(private readonly formBlockStore: FormBlockStoreService) {
    this.formBlockStore.setComponents({
      'formArray': CanvasBlockArrayComponent,      
    });
  }
}
