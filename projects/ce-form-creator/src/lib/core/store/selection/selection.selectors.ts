import { FormBlock, FormRoot } from "@codeffekt/ce-core-data";
import { Selector } from "@ngxs/store";
import { FormsSelectors } from "../forms";
import { SelectionState, SelectionStateModel } from "./selection.state";
import { FormCreatorContext } from "../../models";

export class SelectionSelectors {

    @Selector([SelectionState])
    static block(state: SelectionStateModel): FormBlock | undefined {
        return state.block;
    }

    @Selector([SelectionState])
    static form(state: SelectionStateModel): FormRoot | undefined {
        return state.form;
    }

    @Selector([SelectionState])
    static get(state: SelectionStateModel): FormCreatorContext | undefined {
        if (!state.form) {
            return undefined;
        }

        return { form: state.form, block: state.block };
    }

    @Selector([SelectionSelectors.form, FormsSelectors.allForms])
    static formChanges(currentForm: FormRoot | undefined, forms: FormRoot[]): FormRoot | undefined {
        return forms.find(f => f.id === currentForm?.id);
    }

    @Selector([SelectionState, SelectionSelectors.formChanges])
    static blockChanges(state: SelectionStateModel, form: FormRoot | undefined): FormCreatorContext | undefined {

        if (form?.id !== state.form?.id || !state.form || !state.block) {
            return undefined;
        }

        const context: FormCreatorContext = {
            form: form!,
            block: form?.content[state.block.field]
        }

        return context;
    }
}