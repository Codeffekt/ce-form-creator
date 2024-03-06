import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPropEditComponent } from './form-prop-edit.component';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
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
