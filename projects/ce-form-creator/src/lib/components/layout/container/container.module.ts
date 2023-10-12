import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { CeContainerComponent, CeContainerFooterComponent, CeContainerHeaderComponent } from './container.component';

@NgModule({
  declarations: [
    CeContainerComponent,
    CeContainerFooterComponent,
    CeContainerHeaderComponent,
  ],
  imports: [
    CommonModule,
    CeLayoutModule
  ],
  exports: [
    CeContainerComponent,
    CeContainerFooterComponent,
    CeContainerHeaderComponent,
  ]
})
export class CeContainerModule { }
