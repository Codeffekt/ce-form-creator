import { ElementRef } from "@angular/core";
import { FormRoot } from "@codeffekt/ce-core-data";

export interface FormCanvasElt {
    ref: ElementRef;
    form: FormRoot;
}