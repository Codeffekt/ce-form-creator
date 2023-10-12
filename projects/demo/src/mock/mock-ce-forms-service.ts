import { Injectable } from "@angular/core";
import { FormRoot } from "@codeffekt/ce-core-data";

@Injectable()
export class MockCeFormsService {

    constructor() {}

    async updateFormRoot(form: FormRoot): Promise<FormRoot> {
        form.mtime = Date.now();
        return form;
    }
}