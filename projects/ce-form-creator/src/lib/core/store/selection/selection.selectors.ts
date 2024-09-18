import { FormBlock, IndexType } from "@codeffekt/ce-core-data";
import { Selector } from "@ngxs/store";
import { FormsSelectors } from "../forms";
import { SelectionState, SelectionStateModel } from "./selection.state";
import { CanvasForm, FormCreatorContext } from "../../models";

export class SelectionSelectors {

    @Selector([SelectionState, FormsSelectors.allForms])
    static block(state: SelectionStateModel, forms: CanvasForm[]): FormBlock | undefined {
        if(!state.form || !state.block) {
            return undefined;
        }
        const form = forms.find(f => f.form.id === state.form);
        return form?.form.content[state.block];
    }

    @Selector([SelectionState, FormsSelectors.allForms])
    static form(state: SelectionStateModel, forms: CanvasForm[]): CanvasForm | undefined {
        return state.form ? forms.find(form => form.form.id === state.form) : undefined;
    }

    @Selector([SelectionState, FormsSelectors.allForms])
    static get(state: SelectionStateModel, forms: CanvasForm[]): FormCreatorContext | undefined {
        if (!state.form) {
            return undefined;
        }

        const form = forms.find(form => form.form.id === state.form);

        if(!form) {
            return undefined;
        }        

        return { form, block: state.block ? form.form.content[state.block] : undefined };
    }

    @Selector([SelectionSelectors.form, FormsSelectors.allForms])
    static formChanges(currentForm: CanvasForm | undefined, forms: CanvasForm[]): CanvasForm | undefined {
        return forms.find(f => f.form.id === currentForm?.form.id);
    }

    @Selector([SelectionState, SelectionSelectors.formChanges])
    static blockChanges(state: SelectionStateModel, form: CanvasForm | undefined): FormCreatorContext | undefined {

        if (form?.form.id !== state.form || !state.form || !state.block) {
            return undefined;
        }

        const context: FormCreatorContext = {
            form: form!,
            block: form?.form.content[state.block]
        };

        return context;
    }
}