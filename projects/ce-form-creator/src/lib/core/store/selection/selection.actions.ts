import { IndexType } from "@codeffekt/ce-core-data";

export namespace Selection {

    export class Init {
        static readonly type = '[Selection] Initial Select';
        constructor(public form: IndexType | undefined, public block: IndexType | undefined) { }
    }

    export class SelectBlock {
        static readonly type = '[Selection] Select Block';
        constructor(public form: IndexType, public block: IndexType) { }
    }

    export class SelectForm {
        static readonly type = '[Selection] Select Form';
        constructor(public form: IndexType) { }
    }

    export class Clear {
        static readonly type = '[Selection] Clear';
    }

    export class Restore {
        static readonly type = '[Selection] Restore';
        constructor(public form: IndexType | undefined, public block: IndexType | undefined) { }
    }
}
