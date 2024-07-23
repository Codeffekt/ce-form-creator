import { NgModule } from '@angular/core';
import { SelectionHasFormWithIdPipe, SelectionIsBlockWithFieldPipe, SelectionIsFormWithIdPipe } from './selection.pipes';
import { FormBlockIdAttributePipe, FormIdAttributePipe, LeftAnchorIdAttributePipe, RightAnchorIdAttributePipe } from './ids_generator.pipes';

@NgModule({
    imports: [],
    exports: [
        SelectionIsFormWithIdPipe,
        SelectionIsBlockWithFieldPipe,
        SelectionHasFormWithIdPipe,
        FormIdAttributePipe,
        FormBlockIdAttributePipe,
        LeftAnchorIdAttributePipe,
        RightAnchorIdAttributePipe,
    ],
    declarations: [
        SelectionIsFormWithIdPipe,
        SelectionIsBlockWithFieldPipe,
        SelectionHasFormWithIdPipe,
        FormIdAttributePipe,
        FormBlockIdAttributePipe,
        LeftAnchorIdAttributePipe,
        RightAnchorIdAttributePipe,
    ],
    providers: [],
})
export class CeFormCreatorPipesModule { }
