import { AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { FormBlock, FormRoot } from "@codeffekt/ce-core-data";
import { FormTreeInputType } from "../form-tree-input.types";
import { CeFormBlockFieldInputValidator } from "./block-field.validator";
import { CeFormIdInputValidator } from "./form-id.validator";
import { Injector } from "@angular/core";
export interface FormTreeValidtorBuilderContext {
    block?: FormBlock;
    form: FormRoot;
    type: FormTreeInputType;    
    injector: Injector;
}

export class FormTreeValidatorBuilder {

    private context!: FormTreeValidtorBuilderContext;

    withContext(context: FormTreeValidtorBuilderContext) {
        this.context = context;
        return this;
    }

    build(): AsyncValidatorFn | null {

        if (this.context.type === 'id') {
            return new CeFormIdInputValidator(this.context.injector, this.context.form).validate();
        }

        if (this.context.type === 'block') {
            return new CeFormBlockFieldInputValidator(this.context.block, this.context.form).validate();
        }

        return null;
    }
}