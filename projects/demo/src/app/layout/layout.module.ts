import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { CeCodeEditorModule } from '@codeffekt/ce-code-editor';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { CeContainerModule, CeSidenavModule } from 'projects/ce-form-creator/src/lib/components/layout';
import { ColumnComponent } from './column/column.component';
import { ColumnBasicComponent } from './column/examples/column-basic.component';
import { ColumnOverflowComponent } from './column/examples/column-overflow.component';
import { ColumnWithGapComponent } from './column/examples/column-with-gap.component';
import { LayoutExampleViewerComponent } from './layout-example-viewer/layout-example-viewer.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutSidenavEntryComponent } from './layout-sidenav-entry/layout-sidenav-entry.component';
import { LayoutComponent } from './layout.component';

@NgModule({ declarations: [
        LayoutComponent,
        ColumnComponent,
        LayoutSidenavEntryComponent,
        ColumnWithGapComponent,
        ColumnBasicComponent,
        LayoutExampleViewerComponent,
        ColumnOverflowComponent
    ], imports: [CommonModule,
        LayoutRoutingModule,
        CeLayoutModule,
        MatButtonModule,
        CeCodeEditorModule,
        MatIconModule,
        MatTabsModule,
        CeSidenavModule,
        CeContainerModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class LayoutModule { }
