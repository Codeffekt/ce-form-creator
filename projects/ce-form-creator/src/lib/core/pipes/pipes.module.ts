import { NgModule } from '@angular/core';
import { SelectionHasFormWithIdPipe, SelectionIsBlockWithFieldPipe, SelectionIsFormWithIdPipe } from './selection.pipes';
import { FormBlockIdAttributePipe, formBlockLinkAttribute, FormIdAttributePipe, LeftAnchorIdAttributePipe, RightAnchorIdAttributePipe } from './ids_generator.pipes';
import { FormBlockHaveAnchor, FormBlockIconNamePipe } from './blocks.pipes';

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
        FormBlockIconNamePipe,
        FormBlockHaveAnchor,
        formBlockLinkAttribute,
    ],
    declarations: [
        SelectionIsFormWithIdPipe,
        SelectionIsBlockWithFieldPipe,
        SelectionHasFormWithIdPipe,
        FormIdAttributePipe,
        FormBlockIdAttributePipe,
        LeftAnchorIdAttributePipe,
        RightAnchorIdAttributePipe,
        FormBlockIconNamePipe,
        FormBlockHaveAnchor,
        formBlockLinkAttribute,
    ],
    providers: [],
})
export class CeFormCreatorPipesModule { }
