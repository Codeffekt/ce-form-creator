import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeFormBlockPropEditModule } from '../../../components/block-params-editor/form-block-prop-edit.module';
import { ParamsPanelComponent } from './params-panel.component';
import { CeFormPropEditModule } from '../../../components/form-params-editor/form-prop-edit.module';
import { CeContainerModule } from '../../../components/layout';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { CeTabsModule } from '../../../components/layout/tabs';
import { ProjectParamsEditorComponent } from '../../../components/project-params-editor';

@NgModule({
    imports: [
        CommonModule,
        CeFormPropEditModule,
        CeFormBlockPropEditModule,
        ProjectParamsEditorComponent,
        CeLayoutModule,
        CeTabsModule,
        CeContainerModule
    ],
    exports: [
        ParamsPanelComponent
    ],
    declarations: [
        ParamsPanelComponent
    ],
    providers: [],
})
export class CeParamsPanelModule { }
