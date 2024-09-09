import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeFormCreatorCanvasModule } from '../../../components/canvas/form-creator-canvas.module';
import { RenderPanelComponent } from './render-panel.component';
import { ZoomPanContainerComponent } from '../../../components/canvas/zoom-pan-container/zoom-pan-container.component';
import { CeGridModule } from '@codeffekt/ce-core';

@NgModule({
    imports: [
        CommonModule,
        CeFormCreatorCanvasModule,
        CeGridModule,
        ZoomPanContainerComponent
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
