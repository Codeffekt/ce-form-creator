import { ElementRef, Injectable } from "@angular/core";
import { Canvas, CanvasNodeElt } from "@codeffekt/ce-canvas-nodes";
import { Store } from "@ngxs/store";
import { Subject } from "rxjs";
import { Forms } from "../store";
import { CanvasForm } from "../models";

@Injectable({ providedIn: 'root' })
export class FormsCanvasService {    

    private canvas!: Canvas;

    private updateLayoutDispatcher$ = new Subject<boolean>();   

    constructor(private store: Store) {        
    }

    getCanvas() {
        return this.canvas;
    }    

    setCanvasRootElement(root: ElementRef<HTMLElement>) {
        if (this.canvas) {
            throw new Error("Canvas root element already defined");
        }
        this.canvas = new Canvas(root.nativeElement);
    }

    onNodesMoved(nodes: CanvasNodeElt[], canvasForms: CanvasForm[]) {
        const forms = this.createCanvasFormUpdate(nodes, canvasForms);
        this.store.dispatch(new Forms.UpdateForms(forms));
    }

    updateLayout() {
        this.updateLayoutDispatcher$.next(true);
    }   

    private createCanvasFormUpdate(nodes: CanvasNodeElt[], canvasForms: CanvasForm[]): CanvasForm[] {
        const existingElts = nodes.map(node => ({
            node,
            canvasForm: canvasForms.find(cf => cf.form.id === node.id())
        })).filter(elt => elt.canvasForm !== undefined);
        return existingElts.map(elt => ({
            form: elt.canvasForm!.form,
            layout: {
                id: elt.node.id(),
                coords: elt.node.getCoords(),
            }
        }));
    }
   
}