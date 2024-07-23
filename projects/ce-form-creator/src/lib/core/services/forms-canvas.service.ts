import { ElementRef, inject, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { FormCanvasElt } from "../models/FormCanvasElt";
import { Canvas } from "@codeffekt/ce-canvas-nodes";
import { FormRoot } from "@codeffekt/ce-core-data";
import { IdsAttributeService } from "./ids-attribute.service";

@Injectable({ providedIn: 'root' })
export class FormsCanvasService {

    private canvas!: Canvas;
    private canvasElts: FormCanvasElt[] = [];
    private canvasEltsChanges$: Subject<FormCanvasElt[]> = new Subject();

    private idsAttributeService = inject(IdsAttributeService);

    constructor() { }

    getCanvas() {
        return this.canvas;
    }

    setCanvasRootElement(root: ElementRef<HTMLElement>, forms: FormRoot[]) {
        if(this.canvas) {
            throw new Error("Canvas root element already defined");
        }
        this.canvas = new Canvas(root.nativeElement);
        this.canvasElts = [];

        console.log(this.canvas.getNodes());

        for(let form of forms) {
            const id = this.idsAttributeService.forForm(form);
            const canvasNodeElt = this.canvas.getNodeFromElementId(id);
            this.canvasElts.push({
                ref: new ElementRef(canvasNodeElt.getElement()),
                form,
            });
        }        
    }

    addElement(element: FormCanvasElt) {
        const existingElement = this.canvasElts.find((fce => fce.ref === element.ref));
        if (!existingElement) {
            this.canvasElts.push(element);
            this.canvasEltsChanges$.next(this.canvasElts); 
            this.canvas.addNodeFromElement(element.ref.nativeElement);
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
            this.canvas.removeNodeFromElement(ref.nativeElement);
        }

    }

    formsCanvasChanges(): Observable<FormCanvasElt[]> {
        return this.canvasEltsChanges$;
    }
}