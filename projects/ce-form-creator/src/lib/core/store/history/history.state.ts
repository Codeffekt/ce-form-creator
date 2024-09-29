import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store } from "@ngxs/store";
import { FormsStateModel } from "../forms";
import { Forms } from "../forms/forms.actions";
import { SelectionStateModel } from "../selection/selection.state";
import { HistoryRevisionBuilder } from "./history-revision.builder";
import { History } from "./history.actions";
import { Selection } from "../selection/selection.actions";
import { CanvasForm } from "../../models";
import { Project, ProjectStateModel } from "../project";

export interface HistoryStateRevision {
    projectState: ProjectStateModel;
    formsState: FormsStateModel;
    selectionState: SelectionStateModel;    
}

export interface HistoryStateModel {
    revisions: HistoryStateRevision[]; // TODO: do not use snapshots for saving history
    head: number;
}

export const historyStateDefault: HistoryStateModel = {
    revisions: [],
    head: -1
}

@State<HistoryStateModel>({
    name: 'historyState',
    defaults: historyStateDefault,
})
@Injectable()
export class HistoryState {

    constructor(private store: Store) { }

    @Action(History.Init)
    init(ctx: StateContext<HistoryStateModel>, { forms, selection }: History.Init) {
        const newRevision =
            new HistoryRevisionBuilder(this.store)
                .withForms(forms)
                .withSelection(selection)
                .build();

        this.addRevision(ctx, newRevision);
    }

    @Action(History.Undo)
    undo(ctx: StateContext<HistoryStateModel>) {
        const currentState = ctx.getState();
        this.setHead(ctx, currentState.head - 1);
    }

    @Action(History.Redo)
    redo(ctx: StateContext<HistoryStateModel>) {
        const currentState = ctx.getState();
        this.setHead(ctx, currentState.head + 1);
    }

    @Action(History.AddProject)
    addProject(ctx: StateContext<HistoryStateModel>, { project }: History.AddProject) {

        const newRevision =
            new HistoryRevisionBuilder(this.store)
                .withProject(project)
                .build();

        this.addRevision(ctx, newRevision);

    }

    @Action(History.AddSelection)
    addSelection(ctx: StateContext<HistoryStateModel>, { selection }: History.AddSelection) {

        const newRevision =
            new HistoryRevisionBuilder(this.store)
                .withSelection(selection)
                .build();

        this.addRevision(ctx, newRevision);
    }

    @Action(History.AddForms)
    addForms(ctx: StateContext<HistoryStateModel>, { forms }: History.AddForms) {

        const newRevision =
            new HistoryRevisionBuilder(this.store)
                .withForms(forms)
                .build();

        this.addRevision(ctx, newRevision);
    }

    @Action(History.AddFormsUpdate)
    addFormsUpdate(ctx: StateContext<HistoryStateModel>, { forms }: History.AddFormsUpdate) {

        const newRevision =
            new HistoryRevisionBuilder(this.store)
                .withForms(forms)
                .build();

        this.addRevision(ctx, newRevision);
    }    

    @Action(History.Clear)
    clear(ctx: StateContext<HistoryStateModel>) {
        ctx.setState({ ...historyStateDefault })
    }

    private addRevision(ctx: StateContext<HistoryStateModel>, revision: HistoryStateRevision) {

        const state = ctx.getState();

        // move ahead current head
        const head = state.head + 1;

        // do not take revisions after current head, possible case after undoing 
        const revisions = state.revisions.slice(0, head);

        // updating history state with new revision and new head
        ctx.setState({
            revisions: [...revisions, revision],
            head
        });
    }

    private setHead(ctx: StateContext<HistoryStateModel>, head: number) {
        // patch history state's head
        ctx.patchState({ head });

        // getting revision for given head
        const historyState = ctx.getState();
        const revision = historyState.revisions[head];

        const forms: CanvasForm[] = revision.formsState.forms;

        this.store.dispatch([
            new Selection.Restore(revision.selectionState.form, revision.selectionState.block),
            new Forms.Restore(forms),
            new Project.Restore(revision.projectState.context),            
        ]);
    }
} 
