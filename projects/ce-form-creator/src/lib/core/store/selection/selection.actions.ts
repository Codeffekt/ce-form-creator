import { FormBlock, FormRoot } from "@codeffekt/ce-core-data";
import { SelectionStateModel } from "./selection.state";

export namespace Selection {

    export class Init {
        static readonly type = '[Selection] Initial Select';
        constructor(public form: FormRoot | undefined, public block: FormBlock | undefined) { }
    }

    export class SelectBlock {
        static readonly type = '[Selection] Select Block';
        constructor(public form: FormRoot, public block: FormBlock) { }
    }

    export class SelectForm {
        static readonly type = '[Selection] Select Form';
        constructor(public form: FormRoot) { }
    }

    export class Clear {
        static readonly type = '[Selection] Clear';
    }

    export class Restore {
        static readonly type = '[Selection] Restore';
        constructor(public form: FormRoot | undefined, public block: FormBlock | undefined) { }
    }
}
