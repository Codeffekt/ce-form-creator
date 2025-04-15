import { inject, Pipe, PipeTransform } from "@angular/core";
import { FormBlock, FormRoot } from "@codeffekt/ce-core-data";
import { BlockLinkService, FormBlockIconsService } from "../services";
import { CanvasBlockComponentType } from "../models";

@Pipe({
    name: 'formBlockIconName',
    standalone: false
})
export class FormBlockIconNamePipe implements PipeTransform {

    private formBlockIconsService = inject(FormBlockIconsService);

    transform(block: FormBlock): string {
        return this.formBlockIconsService.getIconFromBlock(block);
    }
}

@Pipe({
    name: 'formBlockHaveAnchor',
    standalone: false
})
export class FormBlockHaveAnchor implements PipeTransform {

    private blockLinkService = inject(BlockLinkService);

    transform(block: FormBlock): boolean {
        return this.blockLinkService.hasLinkAttribute(block);
    }
}

@Pipe({
    name: 'canvasBlockCompType',
    standalone: false,
})
export class CanvasBlockComponentTypePipe implements PipeTransform {
    transform(formInstance: FormRoot, formBlock: FormBlock): CanvasBlockComponentType {
        return {
            formInstance,
            formBlock,
        };
    }
}