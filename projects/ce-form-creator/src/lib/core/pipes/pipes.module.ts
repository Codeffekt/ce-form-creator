import { NgModule } from '@angular/core';
import { SelectionHasFormWithIdPipe, SelectionIsBlockWithFieldPipe, SelectionIsFormWithIdPipe } from './selection.pipes';

@NgModule({
    imports: [],
    exports: [
        SelectionIsFormWithIdPipe,
        SelectionIsBlockWithFieldPipe,
        SelectionHasFormWithIdPipe
    ],
    declarations: [
        SelectionIsFormWithIdPipe,
        SelectionIsBlockWithFieldPipe,
        SelectionHasFormWithIdPipe
    ],
    providers: [],
})
export class CeFormCreatorPipesModule { }
