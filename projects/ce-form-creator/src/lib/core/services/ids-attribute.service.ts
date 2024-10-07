import { Injectable } from "@angular/core";
import { FormBlock } from "@codeffekt/ce-core-data";

@Injectable({ providedIn: 'root'})
export class IdsAttributeService {

    forForm(id: string) {
        return id;
    }

    forFormBlockHeader(id: string) {
        return `header`;
    }

    forFormBlock(id: string, block: FormBlock) {
        return block.field;
    }    

    forFormBlockField(field: string) {
        return field;
    }

    forLeftAnchor() {
        return "left-anchor";
    }

    forRightAnchor() {
        return "right-anchor";
    }
}