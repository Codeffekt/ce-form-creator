import { FormBlock, FormInstance, FormRoot } from "@codeffekt/ce-core-data";

export interface FormCreatorContext {
    form: FormRoot;    
    mask?: FormInstance;
    block?: FormBlock;
}

export interface ConceptionContextBlock extends FormCreatorContext {
    block: FormBlock;
}
