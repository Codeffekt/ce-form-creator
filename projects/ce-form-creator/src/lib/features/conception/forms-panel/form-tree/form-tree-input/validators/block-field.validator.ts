import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormBlock, FormRoot, FormUtils } from '@codeffekt/ce-core-data';

export class CeFormBlockFieldInputValidator {

    constructor(private block: FormBlock | undefined, private form: FormRoot) { }

    validate(): AsyncValidatorFn {

        return async (control: AbstractControl): Promise<ValidationErrors | null> => {

            const field = control.value;

            if (this.isFieldExist(field)) {
                return { 'existingField': true };
            }

            if (this.isEmptyField(field)) {
                return { 'empty': true };
            }

            return null;
        }
    }

    private isFieldExist(field: string): boolean {

        const blocks = FormUtils.getBlocks(this.form);
        const isFieldExist = !!blocks
            .filter(block => block.field !== this.block?.field)
            .find(block => block.field === field);
        return isFieldExist;
    }

    private isEmptyField(field: string): boolean {
        return !field.length;
    }
}