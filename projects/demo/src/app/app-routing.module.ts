import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form-creator',
    loadChildren: () => import('./form-creator/form-creator.module').then(m => m.FormCreatorModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: '',
    redirectTo: 'form-creator',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
