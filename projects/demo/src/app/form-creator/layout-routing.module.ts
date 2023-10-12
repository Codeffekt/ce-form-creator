import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCreatorComponent } from './form-creator.component';

const routes: Routes = [{
  path: '',
  component: FormCreatorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormCreatorRoutingModule { }
