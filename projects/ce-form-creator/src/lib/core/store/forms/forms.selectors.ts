import { FormRoot, IndexType } from "@codeffekt/ce-core-data";
import { createSelector, Selector } from "@ngxs/store";
import { FormsState, FormsStateModel } from "./forms.state";

export class FormsSelectors {

    @Selector([FormsState])
    static allForms(state: FormsStateModel): FormRoot[] {
        return state.forms;
    }

    static formWithId(formId: IndexType) {
        return createSelector([FormsSelectors.allForms], (forms: FormRoot[]) => {
            return forms.find(form => form.id === formId)
        });
    }
}