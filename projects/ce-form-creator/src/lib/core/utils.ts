import { FormBlock, IndexType } from "@codeffekt/ce-core-data";

export class CoreUtils {

    static getBlockParamsBooleanValue(block: FormBlock|undefined, paramsField: IndexType, defaultValue: boolean) {        
        return !block?.params || block?.params[paramsField] === undefined ? defaultValue : !!block.params[paramsField];
    }

}