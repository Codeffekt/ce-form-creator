import { Injectable } from "@angular/core";
import { CanvasLayoutConfig } from "@codeffekt/ce-canvas-nodes";
import { Action, State, StateContext } from "@ngxs/store";
import { Layout } from "./layout.actions";

export type LayoutStateModel = {
    config: CanvasLayoutConfig
};

@State<LayoutStateModel>({
    name: 'layoutState',    
    defaults: {
        config: {            
            nodes: []
        }
    }
})
@Injectable()
export class LayoutState {

    constructor() {}

    @Action(Layout.Init)
    async init(context: StateContext<LayoutStateModel>, { config }: Layout.Init) {
        context.setState({ config });
    }

    @Action(Layout.Restore)
    async restore(context: StateContext<LayoutStateModel>, { config }: Layout.Restore) {
        context.setState({ config });
    }   
}