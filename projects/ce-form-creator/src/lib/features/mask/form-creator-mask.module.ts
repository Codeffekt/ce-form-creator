import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CeLayoutModule } from "@codeffekt/ce-core";
import { CeFormBlockPropEditModule } from "../../components/block-params-editor/form-block-prop-edit.module";
import { CeFormCreatorCanvasModule } from "../../components/canvas/form-creator-canvas.module";
import { CeFormCreatorToolbarModule } from "../../components/toolbar/form-creator-toolbar.module";
import { CeFormCreatorComponentsModule } from "../conception/components-panel/components-panel.module";
import { FormCreatorMaskComponent } from "./form-creator-mask.component";

@NgModule({
    declarations: [
        FormCreatorMaskComponent
    ],
    exports: [
        FormCreatorMaskComponent
    ],
    imports: [
        CommonModule,
        CeFormCreatorToolbarModule,       
        CeFormCreatorCanvasModule, 
        CeFormCreatorComponentsModule,
        CeFormBlockPropEditModule,
        CeLayoutModule
    ]
})
export class CeFormCreatorMaskModule {

}