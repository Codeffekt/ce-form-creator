import { FormTreeInputType } from './form-tree-input.types';

export class CeFormTreeInputSanitizer {

    constructor() { }

    static sanitize(value: string, type: FormTreeInputType): string {
        return value.replace(/\s/g, '-').replace(/^[0-9]+/g, '');
    }
}