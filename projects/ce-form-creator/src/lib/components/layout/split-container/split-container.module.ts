import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitContainerComponent } from './split-container.component';
import { SplitContainerAreaComponent } from './split-container-area.component';
import { AngularSplitModule } from 'angular-split';

@NgModule({
  declarations: [
    SplitContainerComponent,
    SplitContainerAreaComponent
  ],
  imports: [
    CommonModule,
    AngularSplitModule
  ],
  exports: [
    SplitContainerComponent,
    SplitContainerAreaComponent
  ]
})
export class CeSplitContainerModule { }
