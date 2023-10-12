import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnComponent } from './column/column.component';
import { LayoutComponent } from './layout.component';
import { PaddingComponent } from './padding/padding.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'column',
        pathMatch: 'full'
      },
      {
        path: 'padding',
        component: PaddingComponent
      },
      {
        path: 'column',
        component: ColumnComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
