import { Injectable } from "@angular/core";
import { Utils } from "@codeffekt/ce-core";
import { FormRoot } from "@codeffekt/ce-core-data";
import { Action, State, StateContext } from "@ngxs/store";
import { History } from "../history/history.actions";
import { Forms } from "./forms.actions";
import { Selection } from "../selection/selection.actions";
import { SelectionStateModel } from "../selection/selection.state";

export class FormsStateModel {
    forms!: FormRoot[];
}

@State<FormsStateModel>({
    name: 'formsState'
})
@Injectable()
export class FormsState {

    constructor() { }

    @Action(Forms.Init)
    async init(context: StateContext<FormsStateModel>, { forms }: Forms.Init) {
        context.setState({ forms });

        // add initial history revision with forms and selection
        const initialSelection: SelectionStateModel = {
            form: forms[0],
            block: undefined
        }
        context.dispatch([
            new History.Init(forms, initialSelection),
            new Selection.Init(initialSelection.form, initialSelection.block)
        ]);
    }

    @Action(Forms.Restore)
    async restore(context: StateContext<FormsStateModel>, { forms }: Forms.Restore) {
        // context.setState({ forms: Utils.deepcopy(forms) });
        context.setState({ forms: forms });
    }

    @Action(Forms.AddForms)
    addForms(context: StateContext<FormsStateModel>, { forms }: Forms.AddForms) {
        const state = context.getState();

        context.setState({ forms: [...state.forms, ...forms] });
        context.dispatch(new History.AddForms(forms));
    }

    @Action(Forms.RemoveForms)
    removeForms(context: StateContext<FormsStateModel>, { forms }: Forms.RemoveForms) {
        const state = context.getState();
        const filteredForms = state.forms.filter(form => forms.findIndex(f => f.id === form.id) === -1);
        context.setState({ forms: filteredForms });
        context.dispatch(new History.AddForms(forms));
    }

    @Action(Forms.UpdateForm)
    updateForm(context: StateContext<FormsStateModel>, { form }: Forms.UpdateForm) {
        const state = context.getState();

        context.patchState({
            forms: state.forms.map(f => {
                if (f.id === form.id) {
                    return { ...Utils.deepcopy(form) };
                }
                return f;
            })
        });

        context.dispatch(new History.AddFormUpdate(form));
    }
}
