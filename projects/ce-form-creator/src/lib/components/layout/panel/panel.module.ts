import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelSectionComponent } from './panel-section/panel-section.component';
import { PanelSectionLabelComponent } from './panel-section-label/panel-section-label.component';
import { PanelSectionContentComponent } from './panel-section-content/panel-section-content.component';
import { PanelComponent } from './panel.component';
import { CeLayoutModule } from '@codeffekt/ce-core';


@NgModule({
  declarations: [
    PanelSectionComponent,
    PanelSectionLabelComponent,
    PanelSectionContentComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    CeLayoutModule
  ],
  exports: [
    PanelSectionComponent,
    PanelSectionLabelComponent,
    PanelSectionContentComponent,
    PanelComponent
  ]
})
export class CePanelModule { }
