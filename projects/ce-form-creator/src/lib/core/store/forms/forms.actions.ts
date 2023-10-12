import { FormRoot } from "@codeffekt/ce-core-data"

export namespace Forms {

    export class Init {
        static readonly type = '[Forms] Load'
        constructor(public forms: FormRoot[]) { }
    }

    export class Restore {
        static readonly type = '[Forms] Restore'
        constructor(public forms: FormRoot[]) { }
    }

    export class AddForms {
        static readonly type = '[Forms] Add forms';
        constructor(public forms: FormRoot[]) { }
    }

    export class RemoveForms {
        static readonly type = '[Forms] Remove forms';
        constructor(public forms: FormRoot[]) { }
    }

    export class UpdateForm {
        static readonly type = '[Forms] Update form'
        constructor(public form: FormRoot) { }
    }
}