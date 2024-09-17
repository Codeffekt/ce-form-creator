import { Utils } from "@codeffekt/ce-core";
import { Store } from "@ngxs/store";
import { FormsStateModel } from "../forms";
import { HistoryStateRevision } from "./history.state";
import { SelectionStateModel } from "../selection";
import { StoreStateSnapshot } from "../store-model";
import { CanvasForm } from "../../models";

export class HistoryRevisionBuilder {
    
    private forms: CanvasForm[] = [];   
    private selection: SelectionStateModel | undefined;

    constructor(private store: Store) { }

    
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
                if (form.form.id === this.selection?.form?.form.id) {
                    return Utils.deepcopy(form);
                }

                return form;
            })],
        };

        // TODO: Should point toward previous form state
        const selectionState = this.selection ?? snapshot.selectionState;

        const revision: HistoryStateRevision = {
            formsState,
            selectionState,
        };

        return revision;
    }

    // private buildLayout(layout: CanvasLayoutConfig): CanvasLayoutConfig {

    //     const newNodesLayout: CanvasNodeLayoutConfig[] = (this.form ? [this.form] : this.forms)
    //         .filter(node => !layout.nodes.find(elt => elt.id === node.id))
    //         .map(node => ({
    //             id: node.id,
    //             coords: { x: 0, y: 0 }
    //         }));

    //     return {
    //         nodes: [...layout.nodes, ...newNodesLayout]
    //     };
    // }
}