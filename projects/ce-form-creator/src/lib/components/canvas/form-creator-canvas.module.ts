import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeFormCreatorCanvasComponent } from './form-creator-canvas.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DndModule } from 'ngx-drag-drop';
import { CeFormsModule, CeFormsPipesModule, CeLayoutModule, FormControlsBuilder, FormStyleBuilder } from '@codeffekt/ce-core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormBlockEditComponent } from './canvas-block/canvas-block.component';
import { CeCodeEditorModule } from '@codeffekt/ce-code-editor';
import { CeFormCreatorPipesModule } from '../../core/pipes/pipes.module';
import { CoreDirectivesModule } from '../../core';

@NgModule({
  declarations: [
    CeFormCreatorCanvasComponent,
    FormBlockEditComponent
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
    CoreDirectivesModule
  ], exports: [
    CeFormCreatorCanvasComponent
  ], providers: [
    FormStyleBuilder,
    FormControlsBuilder,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ]
})
export class CeFormCreatorCanvasModule { }
