import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreatorStatusBarComponent } from './form-creator-status-bar.component';
import { CeGridModule, CePaddingModule } from '@codeffekt/ce-core';

@NgModule({
  declarations: [
    FormCreatorStatusBarComponent
  ],
  imports: [
    CommonModule,
    CeGridModule,
    CePaddingModule
  ],
  exports: [
    FormCreatorStatusBarComponent,
  ]
})
export class FormCreatorStatusBarModule { }
