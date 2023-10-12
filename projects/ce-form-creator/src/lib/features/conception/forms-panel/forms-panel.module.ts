import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeFormBlocksTreeModule } from './form-tree/form-tree.module';
import { FormsPanelComponent } from './forms-panel.component';

@NgModule({
    imports: [
        CommonModule,
        CeFormBlocksTreeModule
    ],
    exports: [
        FormsPanelComponent
    ],
    declarations: [
        FormsPanelComponent
    ],
    providers: [],
})
export class CeFormsPanelModule { }
