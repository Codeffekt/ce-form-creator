import { ElementRef, Injectable } from "@angular/core";
import { Canvas } from "@codeffekt/ce-canvas-nodes";
import { FormRoot } from "@codeffekt/ce-core-data";

@Injectable({ providedIn: 'root' })
export class FormsCanvasService {

    private canvas!: Canvas;

    constructor() { }

    getCanvas() {
        return this.canvas;
    }

    setCanvasRootElement(root: ElementRef<HTMLElement>, forms: FormRoot[]) {
        if(this.canvas) {
            throw new Error("Canvas root element already defined");
        }
        this.canvas = new Canvas(root.nativeElement);        
    }    
}