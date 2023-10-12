import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CeBarcodeModule } from '@codeffekt/ce-barcode';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { DndModule } from 'ngx-drag-drop';
import { CeComponentItemComponent, CeComponentItemLabelComponent } from './component-item/component-item.component';
import { CeComponentsSectionComponent, CeComponentsSectionTitleComponent } from './components-section/components-section.component';
import { CeComponentsPanel } from './components-panel.component';
import { CeFormFieldModule } from '../../../components/layout';

@NgModule({
  declarations: [
    CeComponentsPanel,
    CeComponentItemComponent,
    CeComponentsSectionComponent,
    CeComponentsSectionTitleComponent,
    CeComponentItemLabelComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    CeFormFieldModule,
    CeLayoutModule,
    DragDropModule,
    DndModule,
    CeBarcodeModule
  ],
  exports: [
    CeComponentsPanel
  ]
})
export class CeFormCreatorComponentsModule { }
