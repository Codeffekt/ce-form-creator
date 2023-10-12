import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CeLayoutModule } from "@codeffekt/ce-core";
import { AngularSplitModule } from "angular-split";
import { CeTabsModule } from "../../components/layout/tabs";
import { CeFormCreatorComponentsModule } from "./components-panel/components-panel.module";
import { FormCreatorConceptionComponent } from "./form-creator-conception.component";
import { CeFormsPanelModule } from "./forms-panel/forms-panel.module";
import { CeHistoryPanelModule } from "./history-panel/history-panel.module";
import { CeParamsPanelModule } from "./params-panel/params-panel.module";
import { CeRenderPanelModule } from "./render-panel/render-panel.module";

@NgModule({
    imports: [
        CommonModule,
        DragDropModule,
        AngularSplitModule,
        CeTabsModule,
        CeLayoutModule,
        CeFormsPanelModule,
        CeRenderPanelModule,
        CeParamsPanelModule,
        CeHistoryPanelModule,
        CeFormCreatorComponentsModule
    ],
    declarations: [
        FormCreatorConceptionComponent,
    ],
    exports: [
        FormCreatorConceptionComponent
    ]
})
export class CeFormCreatorConceptionModule {

}