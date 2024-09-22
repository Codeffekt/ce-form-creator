import { NgModule } from '@angular/core';
import { OnClickStopPropagation } from './stop-propagation.directive';
import { CopyPasteSelectionDirective } from './copy-paste-selection.directive';

@NgModule({
    imports: [],
    exports: [
        OnClickStopPropagation,
        CopyPasteSelectionDirective,
    ],
    declarations: [
        OnClickStopPropagation,
        CopyPasteSelectionDirective,
    ],
    providers: [],
})
export class CoreDirectivesModule { }
