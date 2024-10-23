import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeFormCreatorCanvasModule } from '../../../components/canvas/form-creator-canvas.module';
import { RenderPanelComponent } from './render-panel.component';
import { CeGridModule } from '@codeffekt/ce-core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        CeFormCreatorCanvasModule,
        CeGridModule,
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
