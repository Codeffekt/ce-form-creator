import { ElementRef } from "@angular/core";
import { FormBlock, FormRoot } from "@codeffekt/ce-core-data";

export interface FormCanvasElt {
    ref: ElementRef;
    form: FormRoot;
}

export interface FormCanvasBlockElt {
    ref: ElementRef;    
    block: FormBlock;
    leftAnchor: ElementRef;
    rightAnchor: ElementRef;
}