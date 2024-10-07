import { inject, Pipe, PipeTransform } from "@angular/core";
import { FormBlock, FormRoot } from "@codeffekt/ce-core-data";
import { IdsAttributeService } from "../services/ids-attribute.service";
import { BlockLinkService } from "../services";

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

    private blockLinkService = inject(BlockLinkService);

    transform(form: FormRoot, block: FormBlock): string | null {
        return this.blockLinkService.createLinkFromBlock(block);
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

