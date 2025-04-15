import { NgModule } from '@angular/core';
import { OnClickStopPropagation, OnMouseDownStopPropagation } from './stop-propagation.directive';
import { CopyPasteSelectionDirective } from './copy-paste-selection.directive';

@NgModule({
    imports: [],
    exports: [
        OnClickStopPropagation,
        OnMouseDownStopPropagation,
        CopyPasteSelectionDirective,
    ],
    declarations: [
        OnClickStopPropagation,
        OnMouseDownStopPropagation,
        CopyPasteSelectionDirective,
    ],
    providers: [],
})
export class CoreDirectivesModule { }
