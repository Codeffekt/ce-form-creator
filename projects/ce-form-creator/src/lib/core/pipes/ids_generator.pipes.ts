import { inject, Pipe, PipeTransform } from "@angular/core";
import { FormBlock, FormRoot } from "@codeffekt/ce-core-data";
import { IdsAttributeService } from "../services/ids-attribute.service";
import { BlockIdUtils } from "@codeffekt/ce-canvas-nodes";

@Pipe({
    name: 'formIdAttribute'
})
export class FormIdAttributePipe implements PipeTransform {

    private idsAttributeService = inject(IdsAttributeService);

    transform(form: FormRoot): string {
        return this.idsAttributeService.forForm(form.id);

    }
}

@Pipe({
    name: 'formBlockLinkAttribute'
})
export class formBlockLinkAttribute implements PipeTransform {

    private idsAttributeService = inject(IdsAttributeService);

    transform(form: FormRoot, block: FormBlock): string | null {
        if (block.type === "index" ||
            block.type === "formArray" ||
            block.type === "formAssoc"
        ) {
            return block.root ? BlockIdUtils.createLink({
                nodeId: this.idsAttributeService.forForm(block.root),
                blockId: this.idsAttributeService.forFormBlockHeader(block.root)
            }) : null;
        } 
        return null;
    }
}

@Pipe({
    name: 'formBlockIdAttribute'
})
export class FormBlockIdAttributePipe implements PipeTransform {
    private idsAttributeService = inject(IdsAttributeService);

    transform(form: FormRoot, block?: FormBlock): string {
        return block ? this.idsAttributeService.forFormBlock(form.id, block) :
            this.idsAttributeService.forFormBlockHeader(form.id);

    }
}

@Pipe({
    name: 'leftAnchorIdAttribute'
})
export class LeftAnchorIdAttributePipe implements PipeTransform {
    private idsAttributeService = inject(IdsAttributeService);

    transform(form: FormRoot): string {
        return this.idsAttributeService.forLeftAnchor();

    }
}

@Pipe({
    name: 'rightAnchorIdAttribute'
})
export class RightAnchorIdAttributePipe implements PipeTransform {
    private idsAttributeService = inject(IdsAttributeService);

    transform(form: FormRoot): string {
        return this.idsAttributeService.forRightAnchor();

    }
}

