import { FormBlock, FormInstance } from "@codeffekt/ce-core-data";
import { CanvasForm } from "./CanvasForm";

export interface FormCreatorContext<T extends FormBlock = FormBlock> {
    form: CanvasForm;    
    mask?: FormInstance;
    block?: T;
}

export interface ConceptionContextBlock extends FormCreatorContext {
    block: FormBlock;
}
