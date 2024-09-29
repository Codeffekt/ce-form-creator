import { Utils } from "@codeffekt/ce-core";
import { Store } from "@ngxs/store";
import { FormsStateModel } from "../forms";
import { HistoryStateRevision } from "./history.state";
import { SelectionStateModel } from "../selection";
import { StoreStateSnapshot } from "../store-model";
import { CanvasForm } from "../../models";
import { ProjectStateModel } from "../project/project.state";

export class HistoryRevisionBuilder {
    
    private project: ProjectStateModel | undefined;
    private forms: CanvasForm[] = [];   
    private selection: SelectionStateModel | undefined;    

    constructor(private store: Store) { }

    withProject(project: ProjectStateModel | undefined) {
        this.project = project;
        return this;
    }
    
    withForms(forms: CanvasForm[]) {
        this.forms = forms;
        return this;
    }    

    withSelection(selection: SelectionStateModel | undefined) {
        this.selection = selection;
        return this;
    }      

    build() {
        const snapshot = this.store.snapshot() as StoreStateSnapshot;

        const formsState: FormsStateModel = {
            forms: [...snapshot.formsState.forms.map(form => {                

                // revision with multiple new forms
                if (this.forms.findIndex(f => f.form.id === form.form.id) !== -1) {
                    return Utils.deepcopy(form);
                }

                // revision with new selection 
                if (form.form.id === this.selection?.form) {
                    return Utils.deepcopy(form);
                }

                return form;
            })],
        };

        // TODO: Should point toward previous form state
        const selectionState = this.selection ?? snapshot.selectionState;
        const projectState = this.project ?? snapshot.projectState;        

        const revision: HistoryStateRevision = {
            formsState,
            selectionState,
            projectState,           
        };

        return revision;
    }    
}