import { Injectable } from "@angular/core";
import { FormBlockType, FormRoot, FormUtils } from "@codeffekt/ce-core-data";

const NO_SLOT_VALUE = 0;
const FIRST_SLOT_VALUE = 1;

@Injectable({ providedIn: 'root' })
export class FieldNamingService {

    constructor() { }

    generateFieldName(form: FormRoot, type: FormBlockType, fieldNameWanted?: string) {

        if(fieldNameWanted && !FormUtils.getBlocks(form).find(block => block.field === fieldNameWanted)) {
            return fieldNameWanted;
        }

        const nextSlot =
            FormUtils.getBlocks(form)
                .filter(block => block.type === type)
                .reduce((prev, cur) => Math.max(
                    prev,
                    this.getSlotFromField(cur.field, type) + 1),
                    FIRST_SLOT_VALUE);
        return `${type}_${nextSlot}`;
    }

    private getSlotFromField(field: string, type: FormBlockType) {
        const parts = field.split(`${type}_`);
        if (parts.length == 2) {
            const tryInt = parseInt(parts[1]);
            return isNaN(tryInt) ? NO_SLOT_VALUE : tryInt;
        }
        return NO_SLOT_VALUE;
    }
}