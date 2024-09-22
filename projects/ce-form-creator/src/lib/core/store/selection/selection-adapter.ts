import { CanvasForm } from "../../models/CanvasForm";
import { SelectionStateModel } from "./selection.state";

export class SelectionAdapter {

    static stateModelToCreatorContext(state: SelectionStateModel, forms: CanvasForm[]) {
        if (!state.form) {
            return undefined;
        }

        const form = forms.find(form => form.form.id === state.form);

        if (!form) {
            return undefined;
        }

        return { form, block: state.block ? form.form.content[state.block] : undefined };
    }

}