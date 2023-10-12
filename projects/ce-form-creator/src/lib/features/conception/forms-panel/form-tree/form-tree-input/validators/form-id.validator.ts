import { Injector } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { CeFormsService } from '@codeffekt/ce-core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { debounceTime, delay, distinctUntilChanged, first, firstValueFrom, of, switchMap } from 'rxjs';

export class CeFormIdInputValidator {

    private formsService!: CeFormsService;

    constructor(private injector: Injector, private form: FormRoot) {
        this.formsService = this.injector.get(CeFormsService);
    }

    validate(): AsyncValidatorFn {

        return async (control: AbstractControl): Promise<ValidationErrors | null> => {
            return this.doValidation(control.value);
        }
    }

    private async doValidation(value: string): Promise<ValidationErrors | null> {

        const id = value;

        if (await this.isExistingId(id)) {
            return { 'existingId': true };
        }

        if (this.isEmptyId(id)) {
            return { 'empty': true };
        }
        return null;
    }
    private async isExistingId(id: string): Promise<boolean> {
        // id is the current form
        if (this.form.id === id) {
            return false;
        }

        const form = await firstValueFrom(this.formsService.getFormRoot(id));
        const isFormExist = !!form.id;
        return isFormExist;
    }

    private isEmptyId(id?: string): boolean {
        return !id?.length;
    }
}
