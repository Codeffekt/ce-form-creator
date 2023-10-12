import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeGridModule } from '@codeffekt/ce-core';
import { FormCreatorHistoryItemComponent } from './form-creator-history-item/form-creator-history-item.component';
@NgModule({
    imports: [
        CommonModule,
        CeGridModule
    ],
    exports: [
        FormCreatorHistoryItemComponent
    ],
    declarations: [
        FormCreatorHistoryItemComponent
    ],
    providers: [],
})
export class CeHistoryPanelModule { }
