import { inject, Pipe, PipeTransform } from "@angular/core";
import { FormBlock } from "@codeffekt/ce-core-data";
import { FormBlockIconsService } from "../services";

@Pipe({
    name: 'formBlockIconName'
})
export class FormBlockIconNamePipe implements PipeTransform {

    private formBlockIconsService = inject(FormBlockIconsService);

    transform(block: FormBlock): string {
        return this.formBlockIconsService.getIconFromBlock(block);
    }
}