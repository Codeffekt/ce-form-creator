import { CanvasForm } from "../../models";

export namespace Forms {

    export class Init {
        static readonly type = '[Forms] Load'
        constructor(public forms: CanvasForm[]) { }
    }

    export class Restore {
        static readonly type = '[Forms] Restore'
        constructor(public forms: CanvasForm[]) { }
    }

    export class AddForms {
        static readonly type = '[Forms] Add forms';
        constructor(public forms: CanvasForm[]) { }
    }

    export class RemoveForms {
        static readonly type = '[Forms] Remove forms';
        constructor(public forms: CanvasForm[]) { }
    }

    export class UpdateForms {
        static readonly type = '[Forms] Update forms    ';
        constructor(public forms: CanvasForm[]) { }
    }

}