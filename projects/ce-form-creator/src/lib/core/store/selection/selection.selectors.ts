import { FormBlock, FormRoot } from "@codeffekt/ce-core-data";
import { Selector } from "@ngxs/store";
import { FormsSelectors } from "../forms";
import { SelectionState, SelectionStateModel } from "./selection.state";
import { CanvasForm, FormCreatorContext } from "../../models";

export class SelectionSelectors {

    @Selector([SelectionState])
    static block(state: SelectionStateModel): FormBlock | undefined {
        return state.block;
    }

    @Selector([SelectionState])
    static form(state: SelectionStateModel): CanvasForm | undefined {
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
    static formChanges(currentForm: CanvasForm | undefined, forms: CanvasForm[]): CanvasForm | undefined {
        return forms.find(f => f.form.id === currentForm?.form.id);
    }

    @Selector([SelectionState, SelectionSelectors.formChanges])
    static blockChanges(state: SelectionStateModel, form: CanvasForm | undefined): FormCreatorContext | undefined {

        if (form?.form.id !== state.form?.form.id || !state.form || !state.block) {
            return undefined;
        }

        const context: FormCreatorContext = {
            form: form!,
            block: form?.form.content[state.block.field]
        }

        return context;
    }
}