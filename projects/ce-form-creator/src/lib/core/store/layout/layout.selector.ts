import { Selector } from "@ngxs/store";
import { LayoutState, LayoutStateModel } from "./layout.state";
import { CanvasLayoutConfig } from "@codeffekt/ce-canvas-nodes";

export class LayoutSelector {

    @Selector([LayoutState])
    static getLayout(layout: LayoutStateModel): CanvasLayoutConfig {
        return layout.config;
    }

}