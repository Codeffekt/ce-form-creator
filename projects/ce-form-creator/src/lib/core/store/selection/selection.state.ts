import { Injectable } from "@angular/core";
import { FormBlock, FormRoot } from "@codeffekt/ce-core-data";
import { Action, State, StateContext } from "@ngxs/store";
import { History } from "../history/history.actions";
import { Selection } from "./selection.actions";
import { CanvasForm } from "../../models";

export class SelectionStateModel {    
    form?: CanvasForm;
    block?: FormBlock;
}

@State<SelectionStateModel>({
    name: 'selectionState',
    defaults: undefined
})
@Injectable()
export class SelectionState {

    @Action(Selection.Init)
    initialSelect(ctx: StateContext<SelectionStateModel>, { form }: Selection.Init) {
        ctx.setState({ form, block: undefined });
    }

    @Action(Selection.SelectBlock)
    selectBlock(ctx: StateContext<SelectionStateModel>, { form, block }: Selection.SelectBlock) {
        ctx.setState({ form, block });
        ctx.dispatch(new History.AddSelection({ form, block }));
    }

    @Action(Selection.SelectForm)
    selectForm(ctx: StateContext<SelectionStateModel>, { form }: Selection.SelectForm) {        
        ctx.setState({ form, block: undefined });
        ctx.dispatch(new History.AddSelection({ form, block: undefined }));
    }

    @Action(Selection.Restore)
    restore(ctx: StateContext<SelectionStateModel>, { form, block }: Selection.Restore) {
        ctx.setState({ form: form, block: block })
    }

    @Action(Selection.Clear)
    clear(ctx: StateContext<SelectionStateModel>) {
        ctx.setState({ form: undefined, block: undefined })
    }
}