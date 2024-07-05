import { ElementRef, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { FormCanvasElt } from "../models/FormCanvasElt";

@Injectable({ providedIn: 'root' })
export class FormsCanvasService {

    private canvasElts: FormCanvasElt[] = [];
    private canvasEltsChanges$: Subject<FormCanvasElt[]> = new Subject();

    constructor() { }

    addElement(element: FormCanvasElt) {
        const existingElement = this.canvasElts.find((fce => fce.ref === element.ref));
        if (!existingElement) {
            this.canvasElts.push(element);
            this.canvasEltsChanges$.next(this.canvasElts);            
        }
    }

    getElts() {
        return this.canvasElts;
    }

    removeElement(ref: ElementRef) {
        const existingElementIdx = this.canvasElts.findIndex((fce => fce.ref === ref));
        if (existingElementIdx !== -1) {
            this.canvasElts = this.canvasElts.splice(existingElementIdx, 1);
            this.canvasEltsChanges$.next(this.canvasElts);
        }

    }

    formsCanvasChanges(): Observable<FormCanvasElt[]> {
        return this.canvasEltsChanges$;
    }
}