import { EventEmitter, Type } from "@angular/core";
import { FormCreatorContext } from "./Context";

export interface FormBlockEditComponentType {
    context: FormCreatorContext;
    blockChanges?: EventEmitter<FormCreatorContext>;
}

export interface FormBlockEditComponents {
    [type: string]: Type<FormBlockEditComponentType>;
}

export interface FormBlockEditStore {
    components: FormBlockEditComponents;
}