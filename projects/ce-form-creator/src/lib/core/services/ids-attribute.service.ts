import { Injectable } from "@angular/core";
import { FormBlock, FormRoot } from "@codeffekt/ce-core-data";
import { FormConnector } from "./forms-connectors.service";

@Injectable({ providedIn: 'root'})
export class IdsAttributeService {

    forForm(form: FormRoot) {
        return `root/${form.id}`;
    }

    forFormBlock(form: FormRoot, block: FormBlock) {
        return `${this.forForm(form)}/${block.field}`;
    }

    forConnector(connector: FormConnector) {
        const dstBlockId = connector.dstBlock ? `/${connector.dstBlock.block.field}` : "";
        return `${connector.srcElement.form.id}/${connector.dstElement.form.id}${dstBlockId}`;
    }

    forLeftAnchor() {
        return "left-anchor";
    }

    forRightAnchor() {
        return "right-anchor";
    }
}