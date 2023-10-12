import { FormRoot } from "@codeffekt/ce-core-data"
import { SelectionStateModel } from "../selection"


export namespace History {
    export class Undo {
        static readonly type = '[History] undo'
        constructor() { }
    }

    export class Init {
        static readonly type = '[History] init'
        constructor(public forms: FormRoot[], public selection: SelectionStateModel | undefined) { }
    }

    export class Redo {
        static readonly type = '[History] redo'
        constructor() { }
    }

    export class AddSelection {
        static readonly type = '[History] add selection'
        constructor(public selection: SelectionStateModel) { }
    }

    export class AddForms {
        static readonly type = '[History] add forms'
        constructor(public forms: FormRoot[]) { }
    }

    export class AddFormUpdate {
        static readonly type = '[History] add form update'
        constructor(public form: FormRoot) { }
    }
}