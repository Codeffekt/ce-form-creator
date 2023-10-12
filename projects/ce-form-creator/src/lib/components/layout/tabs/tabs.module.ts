import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { CeContainerModule } from '../container';
import { TabGroupComponent } from './tab-group.component';
import { TabComponent } from './tab.component';

@NgModule({
  declarations: [
    TabGroupComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    CeContainerModule,
    CeLayoutModule
  ],
  exports: [
    TabGroupComponent,
    TabComponent
  ]
})
export class CeTabsModule { }
