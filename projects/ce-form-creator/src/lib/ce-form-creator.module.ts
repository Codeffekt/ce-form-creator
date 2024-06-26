import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { NgxsModule } from '@ngxs/store';

import { CeContainerModule } from './components/layout';
import { FormCreatorStatusBarModule } from './components/status-bar/form-creator-status-bar.module';
import { CeFormCreatorToolbarModule } from './components/toolbar/form-creator-toolbar.module';
import { creatorStore } from './core/store';
import { CeFormCreatorConceptionModule } from './features/conception/form-creator-conception.module';
import { CeFormCreatorMaskModule } from './features/mask/form-creator-mask.module';
import { CeFormCreatorRenderModule } from './features/render/form-creator-render.module';
import { CeFormCreatorComponent } from './form-creator.component';

@NgModule({
  declarations: [
    CeFormCreatorComponent,    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    CeLayoutModule,
    CeFormCreatorConceptionModule,
    CeFormCreatorMaskModule,
    CeFormCreatorRenderModule,
    CeFormCreatorToolbarModule,
    FormCreatorStatusBarModule,
    CeContainerModule,
    NgxsModule.forFeature(creatorStore)
  ],
  exports: [
    CeFormCreatorComponent
  ],
  providers: []
})
export class CeFormCreatorModule { }
