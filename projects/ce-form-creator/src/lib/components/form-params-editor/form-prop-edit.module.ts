import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPropEditComponent } from './form-prop-edit.component';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CePanelModule } from '../layout/panel/panel.module';

@NgModule({
  declarations: [
    FormPropEditComponent
  ],
  imports: [
    CommonModule,
    CeLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CePanelModule
  ],
  exports: [
    FormPropEditComponent
  ]
})
export class CeFormPropEditModule { }
