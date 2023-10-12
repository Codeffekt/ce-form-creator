import { Pipe, PipeTransform } from '@angular/core';
import { FormBlock, FormRoot } from '@codeffekt/ce-core-data';
import { FormCreatorContext } from '../models';

@Pipe({
    name: 'isBlock'
})
export class SelectionIsBlockWithFieldPipe implements PipeTransform {
    transform(selection: FormCreatorContext | null | undefined, form: FormRoot, block: FormBlock): boolean {
        return selection?.form.id === form.id && selection?.block?.field === block.field;

    }
}

@Pipe({
    name: 'isForm'
})
export class SelectionIsFormWithIdPipe implements PipeTransform {
    transform(selection: FormCreatorContext | null | undefined, form: FormRoot): boolean {
        return selection?.form.id === form.id && !selection?.block;
    }
}

@Pipe({
    name: 'hasForm'
})
export class SelectionHasFormWithIdPipe implements PipeTransform {
    transform(selection: FormCreatorContext | null | undefined, form: FormRoot): boolean {
        return selection?.form.id === form.id && !!selection?.block;;
    }
}