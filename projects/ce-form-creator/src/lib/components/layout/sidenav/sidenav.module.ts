import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeSidenav, CeSidenavContainerComponent, CeSidenavContent } from './sidenav.component';
import { CeLayoutModule } from '@codeffekt/ce-core';

@NgModule({
  declarations: [
    CeSidenav,
    CeSidenavContent,
    CeSidenavContainerComponent
  ],
  imports: [
    CommonModule,
    CeLayoutModule
  ],
  exports: [
    CeSidenav,
    CeSidenavContent,
    CeSidenavContainerComponent
  ]
})
export class CeSidenavModule { }
