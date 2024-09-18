import { Injectable } from "@angular/core";
import { Utils } from "@codeffekt/ce-core";
import { Action, State, StateContext } from "@ngxs/store";
import { History } from "../history/history.actions";
import { Forms } from "./forms.actions";
import { Selection } from "../selection/selection.actions";
import { SelectionStateModel } from "../selection/selection.state";
import { CanvasForm } from "../../models";

export class FormsStateModel {
    forms!: CanvasForm[];   
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
            form: forms[0]?.form.id,
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
        context.setState({ forms });
    }

    @Action(Forms.AddForms)
    addForms(context: StateContext<FormsStateModel>, { forms }: Forms.AddForms) {
        const state = context.getState();

        context.setState({ 
            forms: [...state.forms, ...forms],            
        });
        context.dispatch(new History.AddForms(forms));
    }

    @Action(Forms.RemoveForms)
    removeForms(context: StateContext<FormsStateModel>, { forms }: Forms.RemoveForms) {
        const state = context.getState();
        const filteredForms = state.forms.filter(form => forms.findIndex(f => f.form.id === form.form.id) === -1);        
        context.setState({ forms: filteredForms });
        context.dispatch(new History.AddForms(filteredForms));
    }

    @Action(Forms.UpdateForms)
    updateForm(context: StateContext<FormsStateModel>, { forms }: Forms.UpdateForms) {
        const state = context.getState();

        context.patchState({
            forms: state.forms.map(f => {
                const existingForm = forms.find(form => form.form.id === f.form.id);
                if (existingForm) {
                    return { ...Utils.deepcopy(existingForm) };
                }
                return f;
            })
        });

        context.dispatch(new History.AddFormsUpdate(forms));
    }    
}
