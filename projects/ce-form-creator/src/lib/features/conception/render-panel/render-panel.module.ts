import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeFormCreatorCanvasModule } from '../../../components/canvas/form-creator-canvas.module';
import { RenderPanelComponent } from './render-panel.component';

@NgModule({
    imports: [
        CommonModule,
        CeFormCreatorCanvasModule
    ],
    exports: [
        RenderPanelComponent
    ],
    declarations: [
        RenderPanelComponent
    ],
    providers: [],
})
export class CeRenderPanelModule { }
