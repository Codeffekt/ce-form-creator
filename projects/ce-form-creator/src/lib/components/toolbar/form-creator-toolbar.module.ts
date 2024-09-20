import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeFormCreatorToolbarComponent } from './form-creator-toolbar.component';
import { CreatorModeSwitcherComponent } from './creator-mode-switcher/creator-mode-switcher.component';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CeFormCreatorDialogs } from '../dialogs';
import { MessagesModule } from '../layout';
import { ProjectContextComponent } from './project-context/project-context.component';
import { MatInputModule } from '@angular/material/input';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    CeFormCreatorToolbarComponent,
    CreatorModeSwitcherComponent,
    ProjectContextComponent,
  ],
  imports: [
    CommonModule,
    CeLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    A11yModule,
    CeFormCreatorDialogs,
    MessagesModule,
  ],
  exports: [
    CeFormCreatorToolbarComponent
  ]
})
export class CeFormCreatorToolbarModule { }
