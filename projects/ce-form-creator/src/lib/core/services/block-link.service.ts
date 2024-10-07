import { inject, Injectable } from "@angular/core";
import { BlockIdUtils } from "@codeffekt/ce-canvas-nodes";
import { FormBlock } from "@codeffekt/ce-core-data";
import { IdsAttributeService } from "./ids-attribute.service";

@Injectable({providedIn: 'root'})
export class BlockLinkService {
    
    private idsAttributeService = inject(IdsAttributeService);

    createLinkFromBlock(block: FormBlock): string|null {

        if (block.type === "index" ||
            block.type === "formArray" ||
            block.type === "formAssoc"
        ) {
            return this.createLinkFromBlockRoot(block);
        } else if(block.type === "factory") {
            return this.createLinkFromBlockFactory(block);
        }

        return null;
    }

    private createLinkFromBlockRoot(block: FormBlock) {
        return block.root ? BlockIdUtils.createLink({
            nodeId: this.idsAttributeService.forForm(block.root),
            blockId: this.idsAttributeService.forFormBlockHeader(block.root)
        }) : null;
    }

    private createLinkFromBlockFactory(block: FormBlock) {
        if(!block.root || !block.index) {
            return null;
        }
        return BlockIdUtils.createLink({
            nodeId: this.idsAttributeService.forForm(block.root),
            blockId: this.idsAttributeService.forFormBlockField(block.index),
        });
    }
}