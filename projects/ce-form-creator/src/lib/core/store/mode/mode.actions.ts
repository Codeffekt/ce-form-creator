import { FormCreatorMode } from "../../models"

export namespace Mode {
    export class Switch {
        static readonly type = '[Mode] switch'
        constructor(public mode: FormCreatorMode) { }
    }
}