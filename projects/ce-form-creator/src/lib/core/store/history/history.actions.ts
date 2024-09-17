import { SelectionStateModel } from "../selection"
import { CanvasForm } from "../../models";

export namespace History {
    export class Undo {
        static readonly type = '[History] undo'
        constructor() { }
    }

    export class Init {
        static readonly type = '[History] init'
        constructor(
            public forms: CanvasForm[], 
            public selection: SelectionStateModel | undefined) { }
    }

    export class Redo {
        static readonly type = '[History] redo';
        constructor() { }
    }

    export class AddSelection {
        static readonly type = '[History] add selection';
        constructor(public selection: SelectionStateModel) { }
    }

    export class AddForms {
        static readonly type = '[History] add forms';
        constructor(public forms: CanvasForm[]) { }
    }

    export class AddFormsUpdate {
        static readonly type = '[History] add form update';
        constructor(public forms: CanvasForm[]) { }
    }    
   
}