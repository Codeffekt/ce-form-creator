import { FormBlock, FormInstance } from "@codeffekt/ce-core-data";
import { CanvasForm } from "./CanvasForm";

export interface FormCreatorContext {
    form: CanvasForm;    
    mask?: FormInstance;
    block?: FormBlock;
}

export interface ConceptionContextBlock extends FormCreatorContext {
    block: FormBlock;
}
