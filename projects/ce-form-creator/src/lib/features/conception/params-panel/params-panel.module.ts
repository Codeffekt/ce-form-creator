import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeFormBlockPropEditModule } from '../../../components/block-params-editor/form-block-prop-edit.module';
import { ParamsPanelComponent } from './params-panel.component';
import { CeFormPropEditModule } from '../../../components/form-params-editor/form-prop-edit.module';
import { CeContainerModule } from '../../../components/layout';

@NgModule({
    imports: [
        CommonModule,
        CeFormPropEditModule,
        CeFormBlockPropEditModule,
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
