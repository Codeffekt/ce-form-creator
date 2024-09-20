import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeFormCreatorModule } from '@codeffekt/ce-form-creator';
import { FormCreatorComponent } from './form-creator.component';
import { FormCreatorRoutingModule } from './layout-routing.module';
import { FormsLibraryService } from '@codeffekt/ce-form-creator';
import { LOCAL_FORMS } from '../library/forms';

@NgModule({
  declarations: [
    FormCreatorComponent
  ],
  imports: [
    CommonModule,
    CeFormCreatorModule,
    FormCreatorRoutingModule,
  ]
})
export class FormCreatorModule { 
  constructor(
    libraryService: FormsLibraryService,        
  ) {
    libraryService.setForms(LOCAL_FORMS);    
  }
}
