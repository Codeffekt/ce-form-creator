import { CanvasNodeLayoutConfig } from "@codeffekt/ce-canvas-nodes";
import { FormRoot } from "@codeffekt/ce-core-data";

export interface CanvasForm {
    layout: CanvasNodeLayoutConfig;
    form: FormRoot;
}