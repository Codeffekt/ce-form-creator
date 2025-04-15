import { Injectable } from "@angular/core";
import { FormRoot, FormUtils } from "@codeffekt/ce-core-data";
import { CanvasBlockComponentType } from "../models";

@Injectable({ providedIn: 'root' })
export class PropFieldsService {    

    generatePropField(root: FormRoot, comp: CanvasBlockComponentType): string | null {
        if (comp.formInstance.id === root.id) {            
            return comp.formBlock.field;
        } else {
            const elts = FormUtils.getBlocks(root)
                .filter(block => FormUtils.isBlockIndex(block))
                .filter(block => block.root !== undefined && block.root === comp.formInstance.id);
            if(elts.length !== 1) {
                return null;
            }
            const elt = elts[0];
            return `${elt.field}.${comp.formBlock.field}`;
        }        
    }

}