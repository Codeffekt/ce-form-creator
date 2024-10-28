import { inject, Injectable } from "@angular/core";
import { BlockIdUtils, LinkStyleArrow, LinkStyleSquare } from "@codeffekt/ce-canvas-nodes";
import { FormBlock } from "@codeffekt/ce-core-data";
import { IdsAttributeService } from "./ids-attribute.service";

@Injectable({ providedIn: 'root' })
export class BlockLinkService {

    private idsAttributeService = inject(IdsAttributeService);

    createLinkFromBlock(block: FormBlock): string | null {

        if (this.hasLinkAttribute(block)) {
            return this.createLinkFromBlockRoot(block);
        }

        return null;
    }

    createLinkStyleFromBlock(block: FormBlock): string | null {
        if (this.hasLinkAttribute(block)) {
            return this.createLinkStyleFromBlockRoot(block);
        }

        return null;
    }

    hasLinkAttribute(block: FormBlock): boolean {
        return (block.type === "index" ||
            block.type === "formArray" ||
            block.type === "formAssoc" ||
            block.type === "action" ||
            block.type === "factory"
        )
    }

    private createLinkFromBlockRoot(block: FormBlock) {
        return block.root ? BlockIdUtils.createLink({
            nodeId: this.idsAttributeService.forForm(block.root),
            blockId: this.idsAttributeService.forFormBlockHeader(block.root)
        }) : null;
    }
    
    private createLinkStyleFromBlockRoot(block: FormBlock) {
        return block.type === "formArray" || block.type === "formAssoc" ?
            LinkStyleSquare.LINK_STYLE_NAME : LinkStyleArrow.LINK_STYLE_NAME;
    }
}