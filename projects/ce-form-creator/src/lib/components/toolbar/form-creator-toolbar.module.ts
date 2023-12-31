import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeFormCreatorToolbarComponent } from './form-creator-toolbar.component';
import { CreatorModeSwitcherComponent } from './creator-mode-switcher/creator-mode-switcher.component';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CeFormCreatorToolbarComponent,
    CreatorModeSwitcherComponent,
  ],
  imports: [
    CommonModule,
    CeLayoutModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    CeFormCreatorToolbarComponent
  ]
})
export class CeFormCreatorToolbarModule { }
