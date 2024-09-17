import { CanvasLayoutConfig } from "@codeffekt/ce-canvas-nodes";
import { FormRoot } from "@codeffekt/ce-core-data";

export namespace Layout {

    export class Init {
        static readonly type = '[Layout] Load';
        constructor(public config: CanvasLayoutConfig) {}
    }

    export class UpdateLayout {
        static readonly type = '[Layout] Update layout';
        constructor(public config: CanvasLayoutConfig) { }
    }

    export class AddForms {
        static readonly type = '[Layout] Add forms';
        constructor(public forms: FormRoot[]) { }
    }

    export class RemoveForms {
        static readonly type = '[Layout] Remove forms';
        constructor(public forms: FormRoot[]) { }
    }    

    export class Restore {
        static readonly type = '[Layout] Restore'
        constructor(public config: CanvasLayoutConfig) { }
    }
}