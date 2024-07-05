import { ElementRef, Injectable } from "@angular/core";
import { FormCanvasElt } from "../models/FormCanvasElt";
import { FormDragEvent } from "../models/FormDragEvent";
import { FormBlock, FormRoot, FormUtils } from "@codeffekt/ce-core-data";

export type FormConnectorType = "index" | "array" | "assoc";

export interface FormConnector {
    type: FormConnectorType;
    root: ElementRef<SVGElement>;
    srcElement: FormCanvasElt;
    dstElement: FormCanvasElt;
    srcBlock: FormBlock;
    dstBlock?: FormBlock;
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

    static svgContainerId = "tds_svgContainer";
    static svgConnectorsId = "tds_svgConnectors";

    private connectors: FormConnector[] = [];
    private root!: ElementRef<SVGElement>;
    private svgContainer!: HTMLElement;

    private ids = {
        "arrow": "tds_arrow",
        "arrow_draft": "tds_arrow_draft",
        "arrow_over": "tds_arrow_over",
        "arrow_selected": "tds_arrow_selected"
    };

    private classes = {
        "connector_selected": "tds_connector_selected",
        "input_block": "tds_input_block",
        "connectable": "tds_connectable",
        "connector": "tds_connector",
        "connector_over": "tds_connector_over",
        "path": "tds_path",
        "connector_draft": "tds_connector_draft",
    };

    private colors = {
        "black": "black",
        "gray": "gray",
        "blue": "#3ea9f5"
    };

    setRootElement(root: ElementRef<SVGElement>) {
        this.root = root;
        this.initRoot();
    }

    updateConnectors(elts: FormCanvasElt[]) {
        // build the pairs of form canvas elt that require connectors
        // a connector is linked between 2 form canvas elt where
        // a form (src) has at minimum one block of type index or formArray that refers
        // to another form (dst)
        const possibleConnectors = elts
            .map(elt => this.createConnectorsForFormCanvas(elt, elts))
            .flat();
        console.log(possibleConnectors);
        this.connectors = possibleConnectors.filter(elt => !this.isConnectorArrayDst(elt, possibleConnectors));
        console.log(this.connectors);
        this.clearSVGConnectors();
        this.buildSVGConnectors();
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

    private createConnectorForArray(src: FormCanvasElt, srcBlock: FormBlock, dst: FormCanvasElt): FormConnector {
        const dstBlock = srcBlock.index !== undefined ? FormUtils.getBlockFromField(dst.form, srcBlock.index) : undefined;
        return {
            type: dstBlock ? "array" : "assoc",
            root: this.root,
            srcElement: src,
            srcBlock,
            dstElement: dst,
            dstBlock,
        };
    }

    private createConnectorForIndex(src: FormCanvasElt, srcBlock: FormBlock, dst: FormCanvasElt): FormConnector {
        return {
            type: "index",
            root: this.root,
            srcElement: src,
            srcBlock,
            dstElement: dst,
        };
    }

    private isConnectorArrayDst(src: FormConnector, connectors: FormConnector[]) {
        if (src.type !== "index") {
            return false;
        }
        return connectors.find(c => c.dstBlock === src.srcBlock);
    }

    private clearSVGConnectors() {
        const paths = this.root.nativeElement.getElementsByTagName('path');
        for (let i = 0; i < paths.length; ++i) {
            this.root.nativeElement.removeChild(paths[i]);
        }
    }

    private buildSVGConnectors() {
        for (let connector of this.connectors) {
            const id = this.createConnectorId(connector);
            const svgConnector = document.createElementNS("http://www.w3.org/2000/svg", "path");
            svgConnector.setAttributeNS(null, "fill", "transparent");
            svgConnector.setAttributeNS(null, "id", id);
            svgConnector.setAttributeNS(null, "class", "connector");
            svgConnector.setAttributeNS(null, "pointer-events", "stroke");
            this.svgContainer.appendChild(svgConnector);

            const frontPoint = this.elementLogicCenter(connector.srcElement.ref.nativeElement);
            const backPoint = this.elementLogicCenter(connector.dstElement.ref.nativeElement);
            const controlFront: ControlPoint = {
                x: 0,
                y: 0
            };
            const controlBack: ControlPoint = {
                x: 0,
                y: 0
            };

            const d = "M" + (frontPoint.x - 10) + " " + frontPoint.y + " " + "C " + controlFront.x + " " + controlFront.y + " " + controlBack.x + " " + controlBack.y + " " + backPoint.x + " " + backPoint.y;
            svgConnector.setAttributeNS(null, "d", d);
            svgConnector.setAttributeNS(null, "marker-start", "url(#" + this.ids['arrow'] + ")");
        }
    }

    private createConnectorId(connector: FormConnector) {
        const dstBlockId = connector.dstBlock ? `/${connector.dstBlock.field}` : "";
        return `${connector.srcElement.form.id}/${connector.dstElement.form.id}${dstBlockId}`;
    }

    private elementLogicCenter(element: HTMLElement): ControlPoint {
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left,
            y: rect.top,
        }
    }

    private initRoot() {
        const svgContainer = this.root.nativeElement;
        svgContainer.style.overflow = "visible";
        svgContainer.style.left = "0px";
        svgContainer.style.top = "0px";
        svgContainer.style.position = "absolute";
        svgContainer.style.zIndex = "inherit";

        const markers = [
            { id: this.ids['arrow'], fill: this.colors['black'], class: this.classes['connector'] },
            { id: this.ids['arrow_draft'], fill: this.colors['gray'], class: this.classes['connector_draft'] },
            { id: this.ids['arrow_over'], fill: this.colors['gray'], class: this.classes['connector_over'] },
            { id: this.ids['arrow_selected'], fill: this.colors['blue'], class: this.classes['connector_selected'] }
        ];

        const defsElement = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        for (const marker of markers) {
            // Create `<marker>` element and attributes
            const markerElement = document.createElementNS("http://www.w3.org/2000/svg", "marker");
            markerElement.setAttribute("id", marker.id);
            markerElement.setAttribute("markerWidth", "10");
            markerElement.setAttribute("markerHeight", "20");
            markerElement.setAttribute("refX", "10");
            markerElement.setAttribute("refY", "10");
            markerElement.setAttribute("markerUnits", "userSpaceOnUse");
            markerElement.setAttribute("orient", "auto");
            // Create `<polygon>` element and attributes
            const polygonElement = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygonElement.setAttribute("fill", marker.fill);
            polygonElement.setAttribute("class", marker.class);
            polygonElement.setAttribute("points", "10 6, 10 14, 2 10");
            // Add the `<polygon>` element as a child of `<marker>`
            markerElement.appendChild(polygonElement);
            // Add the `<marker>` element as a child of `<defs>`
            defsElement.appendChild(markerElement);
        }

        svgContainer.appendChild(defsElement);

        const gElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
        gElement.id = FormsConnectorsService.svgConnectorsId;
        gElement.setAttribute("fill", "white");
        gElement.setAttribute("stroke", "black");
        gElement.setAttribute("stroke-width", "2");
        svgContainer.appendChild(gElement);

        this.svgContainer = document.getElementById(FormsConnectorsService.svgConnectorsId)!;
    }
}