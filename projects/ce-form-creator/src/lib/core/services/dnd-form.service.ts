import { Injectable } from "@angular/core";

const DND_FORM_BLOCK_TYPE = "dnd-form-block";
const DND_COMP_BLOCK_TYPE = "dnd-comp-block";
const DND_FORM_TYPE = "dnd-form";

@Injectable({ providedIn: 'root'})
export class DndFormService {

    readonly treeFormAllowedTypes = [DND_COMP_BLOCK_TYPE];
    readonly canvasFormAllowedTypes = [DND_COMP_BLOCK_TYPE];
    readonly formFieldsAllowedTypes = [DND_FORM_BLOCK_TYPE];
    readonly indexAllowedTypes = [DND_FORM_TYPE];
    readonly formBlockType = DND_FORM_BLOCK_TYPE;
    readonly compBlockType = DND_COMP_BLOCK_TYPE;
    readonly formType = DND_FORM_TYPE;
}