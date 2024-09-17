import { ElementRef, Injectable } from "@angular/core";
import { Canvas, CanvasLayoutConfig, CanvasNodeElt, ExportLayout } from "@codeffekt/ce-canvas-nodes";
import { FormRoot } from "@codeffekt/ce-core-data";
import { Store } from "@ngxs/store";
import { Subject } from "rxjs";
import { Forms } from "../store";
import { CanvasForm } from "../models";

@Injectable({ providedIn: 'root' })
export class FormsCanvasService {

    // @Select(FormsSelectors.layout) private layout$: Observable<CanvasLayoutConfig> | undefined;

    private canvas!: Canvas;
    private exportLayout = new ExportLayout();

    private updateLayoutDispatcher$ = new Subject<boolean>();   

    constructor(private store: Store) {
        // this.createUpdateLayoutDispatcher();
    }

    getCanvas() {
        return this.canvas;
    }

    // layoutChanges(): Observable<CanvasLayoutConfig> | undefined {
    //     return this.layout$;
    // }

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

    createDefaultLayout(forms: FormRoot[]): CanvasLayoutConfig {
        return {
            nodes: forms.map(form => ({
                id: form.id,
                coords: {
                    x: 0,
                    y: 0
                }
            }))
        };
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

    // private createUpdateLayoutDispatcher() {
    //     this.updateLayoutDispatcher$.pipe(
    //         debounceTime(500)
    //     ).subscribe(() => {
    //         console.log("UpdateFormsLayout");
    //         this.canvas.applyAutoLayout(this.exportLayout);
    //         this.store.dispatch(new Forms.UpdateFormsLayout(this.exportLayout.getExportedLayout()));
    //     });
    // }
}