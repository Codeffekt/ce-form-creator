import { NgModule } from '@angular/core';
import { SelectionHasBlockWithIdPipe, SelectionHasFormWithIdPipe, SelectionIsBlockWithFieldPipe, SelectionIsFormWithIdPipe } from './selection.pipes';
import { FormBlockIdAttributePipe, FormBlockLinkAttribute, FormBlockLinkStyleAttribute, FormIdAttributePipe, LeftAnchorIdAttributePipe, RightAnchorIdAttributePipe } from './ids_generator.pipes';
import { CanvasBlockComponentTypePipe, FormBlockHaveAnchor, FormBlockIconNamePipe } from './blocks.pipes';

@NgModule({
    imports: [],
    exports: [
        SelectionIsFormWithIdPipe,
        SelectionIsBlockWithFieldPipe,
        SelectionHasFormWithIdPipe,
        SelectionHasBlockWithIdPipe,
        FormIdAttributePipe,
        FormBlockIdAttributePipe,
        LeftAnchorIdAttributePipe,
        RightAnchorIdAttributePipe,
        FormBlockIconNamePipe,
        FormBlockHaveAnchor,
        FormBlockLinkAttribute,
        FormBlockLinkStyleAttribute,
        CanvasBlockComponentTypePipe,
    ],
    declarations: [
        SelectionIsFormWithIdPipe,
        SelectionIsBlockWithFieldPipe,
        SelectionHasFormWithIdPipe,
        SelectionHasBlockWithIdPipe,
        FormIdAttributePipe,
        FormBlockIdAttributePipe,
        LeftAnchorIdAttributePipe,
        RightAnchorIdAttributePipe,
        FormBlockIconNamePipe,
        FormBlockHaveAnchor,
        FormBlockLinkAttribute,
        FormBlockLinkStyleAttribute,
        CanvasBlockComponentTypePipe,
    ],
    providers: [],
})
export class CeFormCreatorPipesModule { }
