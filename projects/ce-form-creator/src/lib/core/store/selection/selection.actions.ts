import { FormBlock } from "@codeffekt/ce-core-data";
import { CanvasForm } from "../../models";

export namespace Selection {

    export class Init {
        static readonly type = '[Selection] Initial Select';
        constructor(public form: CanvasForm | undefined, public block: FormBlock | undefined) { }
    }

    export class SelectBlock {
        static readonly type = '[Selection] Select Block';
        constructor(public form: CanvasForm, public block: FormBlock) { }
    }

    export class SelectForm {
        static readonly type = '[Selection] Select Form';
        constructor(public form: CanvasForm) { }
    }

    export class Clear {
        static readonly type = '[Selection] Clear';
    }

    export class Restore {
        static readonly type = '[Selection] Restore';
        constructor(public form: CanvasForm | undefined, public block: FormBlock | undefined) { }
    }
}
