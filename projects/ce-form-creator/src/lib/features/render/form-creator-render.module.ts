import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CeLayoutModule } from "@codeffekt/ce-core";
import { FormCreatorRenderComponent } from "./form-creator-render.component";

@NgModule({
    declarations: [
        FormCreatorRenderComponent,
    ],
    exports: [
        FormCreatorRenderComponent
    ],
    imports: [
        CommonModule,        
        CeLayoutModule,
    ]
})
export class CeFormCreatorRenderModule {

}