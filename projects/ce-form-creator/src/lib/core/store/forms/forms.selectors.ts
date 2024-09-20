import { IndexType } from "@codeffekt/ce-core-data";
import { createSelector, Selector } from "@ngxs/store";
import { FormsState, FormsStateModel } from "./forms.state";
import { CanvasForm } from "../../models";

export class FormsSelectors {

    @Selector([FormsState])
    static allForms(state: FormsStateModel): CanvasForm[] {
        return state.forms;
    }    

    static formWithId(formId: IndexType) {
        return createSelector([FormsSelectors.allForms], (forms: CanvasForm[]) => {
            return forms.find(form => form.form.id === formId)
        });
    }
}