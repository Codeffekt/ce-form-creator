import { Type } from "@angular/core";
import { FormBlock, FormRoot } from "@codeffekt/ce-core-data";

export interface CanvasBlockComponentType {
    formInstance: FormRoot;
    formBlock: FormBlock;
}

export interface CanvasBlockComponents {
    [type: string]: Type<CanvasBlockComponentType>;
}

export interface CanvasBlockStore {
    components: CanvasBlockComponents;
}