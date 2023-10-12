import { Utils } from "@codeffekt/ce-core";
import { FormRoot } from "@codeffekt/ce-core-data";
import { Store } from "@ngxs/store";
import { FormsStateModel } from "../forms";
import { HistoryStateRevision } from "./history.state";
import { SelectionStateModel } from "../selection";

export class HistoryRevisionBuilder {

    private form: FormRoot | undefined;
    private forms: FormRoot[] = [];
    private selection: SelectionStateModel | undefined;

    constructor(private store: Store) { }

    withForm(form: FormRoot) {
        this.form = form;
        return this;
    }

    withForms(forms: FormRoot[]) {
        this.forms = forms;
        return this;
    }

    withSelection(selection: SelectionStateModel | undefined) {
        this.selection = selection;
        return this;
    }

    build() {
        const snapshot = this.store.snapshot();

        var formsState: FormsStateModel;

        formsState = {
            forms: [...(snapshot.formsState as FormsStateModel).forms.map(form => {
                
                // revision with new form
                if (form.id === this.form?.id) {
                    return Utils.deepcopy(this.form);
                }

                // revision with multiple new forms
                if (this.forms.findIndex(f => f.id === form.id) !== -1) {
                    return Utils.deepcopy(form);
                }

                // revision with new selection 
                if (form.id === this.selection?.form?.id) {
                    return Utils.deepcopy(form);
                }

                return form;
            })]
        };

        // TODO: Should point toward previous form state
        const selectionState = this.selection ?? snapshot.selectionState;

        const revision: HistoryStateRevision = {
            formsState,
            selectionState
        }

        return revision;
    }
}