import { inject, Pipe, PipeTransform } from "@angular/core";
import { FormBlock, FormRoot } from "@codeffekt/ce-core-data";
import { IdsAttributeService } from "../services/ids-attribute.service";

@Pipe({
    name: 'formIdAttribute'
})
export class FormIdAttributePipe implements PipeTransform {

    private idsAttributeService = inject(IdsAttributeService);

    transform(form: FormRoot): string {
        return this.idsAttributeService.forForm(form);

    }
}

@Pipe({
    name: 'formBlockIdAttribute'
})
export class FormBlockIdAttributePipe implements PipeTransform {
    private idsAttributeService = inject(IdsAttributeService);

    transform(form: FormRoot, block: FormBlock): string {
        return this.idsAttributeService.forFormBlock(form, block);

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

