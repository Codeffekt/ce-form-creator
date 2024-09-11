import { ElementRef, inject, Injectable } from "@angular/core";
import { FormCanvasBlockElt, FormCanvasElt } from "../models/FormCanvasElt";
import { FormDragEvent } from "../models/FormDragEvent";
import { FormBlock, FormRoot, FormUtils } from "@codeffekt/ce-core-data";
import { IdsAttributeService } from "./ids-attribute.service";
import { FormsCanvasService } from "./forms-canvas.service";
import { Canvas, Connector } from "@codeffekt/ce-canvas-nodes";

export type FormConnectorType = "index" | "array" | "assoc";

export interface FormConnector {
    type: FormConnectorType;
    canvas: Canvas;
    srcElement: FormCanvasElt;
    dstElement: FormCanvasElt;
    srcBlock: FormCanvasBlockElt;
    dstBlock?: FormCanvasBlockElt;
}

interface ControlPoint {
    x: number;
    y: number;
}

function findPossibleBlocksRef(form: FormRoot): FormBlock[] {
    return FormUtils.getBlocks(form).filter(block => isBlockRef(block));
}

function isBlockRef(block: FormBlock): boolean {
    return block.root !== undefined && (block.type === "index" || block.type == "formArray");
}



@Injectable()
export class FormsConnectorsService {

    private connectors: FormConnector[] = [];

    private idsAttributeService = inject(IdsAttributeService);
    private formsCanvasService = inject(FormsCanvasService);

    updateConnectors() {
        const elts = this.formsCanvasService.getElts();

        // build the pairs of form canvas elt that require connectors
        // a connector is linked between 2 form canvas elt where
        // a form (src) has at minimum one block of type index or formArray that refers
        // to another form (dst)
        const possibleConnectors = elts
            .map(elt => this.createConnectorsForFormCanvas(elt, elts))
            .flat();
        this.connectors = possibleConnectors.filter(elt => !this.isConnectorArrayDst(elt, possibleConnectors));
        console.log(this.connectors);
        const canvasConnectors = this.connectors.map(connector =>
            Connector.fromElementsId(this.formsCanvasService.getCanvas(), {
                nodeId: this.idsAttributeService.forForm(connector.srcElement.form.id),
                blockId: this.idsAttributeService.forFormBlock(
                    connector.srcElement.form.id,
                    connector.srcBlock.block),
            }, {
                nodeId: this.idsAttributeService.forForm(connector.dstElement.form.id),
                blockId: connector.dstBlock ? this.idsAttributeService.forFormBlock(
                    connector.dstElement.form.id,
                    connector.dstBlock.block,
                ) : this.idsAttributeService.forForm(connector.dstElement.form.id),
            })
        );
        console.log(canvasConnectors);
        // this.formsCanvasService.getCanvas().updateConnectors(canvasConnectors);
    }

    onFormDragged(evt: FormDragEvent) {

    }

    private createConnectorsForFormCanvas(elt: FormCanvasElt, elts: FormCanvasElt[]): FormConnector[] {
        const possibleBlocksRef = findPossibleBlocksRef(elt.form);
        return possibleBlocksRef
            .map(block => this.createConnectorForBlock(elt, block, elts))
            .filter(connector => connector !== undefined) as FormConnector[];
    }

    private createConnectorForBlock(src: FormCanvasElt, srcBlock: FormBlock, elts: FormCanvasElt[]): FormConnector | undefined {
        const dst = elts.find(elt => elt.form.id !== src.form.id && srcBlock.root === elt.form.id);
        if (!dst) {
            return undefined;
        }

        return srcBlock.type === 'index' ?
            this.createConnectorForIndex(src, srcBlock, dst) :
            this.createConnectorForArray(src, srcBlock, dst);
    }

    private createElementRefFromChildrenId(src: HTMLElement, id: string): ElementRef {
        for (let child of Array.from(src.children)) {
            if (child.id === id) {
                return new ElementRef(child);
            }
        }
        throw new Error(`${id} not found`);
    }

    private createFormCanvasBlockElt(parent: FormCanvasElt, block: FormBlock): FormCanvasBlockElt {
        const blockId = this.idsAttributeService.forFormBlock(parent.form.id, block);
        const blockElement = document.getElementById(blockId);
        if (!blockElement) {
            throw new Error(`Cannot find elt ${blockId}`);
        }
        return {
            ref: new ElementRef(document.getElementById(blockId)),
            block,
            leftAnchor: this.createElementRefFromChildrenId(blockElement, this.idsAttributeService.forLeftAnchor()),
            rightAnchor: this.createElementRefFromChildrenId(blockElement, this.idsAttributeService.forRightAnchor()),
        }
    }

    private createConnectorForArray(src: FormCanvasElt, srcBlock: FormBlock, dst: FormCanvasElt): FormConnector {
        const dstBlock = srcBlock.index !== undefined ?
            this.createFormCanvasBlockElt(dst, FormUtils.getBlockFromField(dst.form, srcBlock.index)) :
            undefined;
        return {
            type: dstBlock ? "array" : "assoc",
            canvas: this.formsCanvasService.getCanvas(),
            srcElement: src,
            srcBlock: this.createFormCanvasBlockElt(src, srcBlock),
            dstElement: dst,
            dstBlock,
        };
    }

    private createConnectorForIndex(src: FormCanvasElt, srcBlock: FormBlock, dst: FormCanvasElt): FormConnector {
        return {
            type: "index",
            canvas: this.formsCanvasService.getCanvas(),
            srcElement: src,
            srcBlock: this.createFormCanvasBlockElt(src, srcBlock),
            dstElement: dst,
        };
    }

    private isConnectorArrayDst(src: FormConnector, connectors: FormConnector[]) {
        if (src.type !== "index") {
            return false;
        }
        return connectors.find(c => c.dstBlock === src.srcBlock);
    }    

}