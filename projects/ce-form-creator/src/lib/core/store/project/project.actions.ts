import { ProjectFormat, ProjectFormatContext } from "../../../project/ProjectFormat";

export namespace Project {

    export class Init {
        static readonly type = '[Project] Load'
        constructor(public project: ProjectFormat) { }
    }

    export class Restore {
        static readonly type = '[Project] Restore';
        constructor(public context: ProjectFormatContext) { }
    }

    export class UpdateProject {
        static readonly type = '[Project] Update';
        constructor(public context: ProjectFormatContext) { }
    }

    export class UpdateProjectName {
        static readonly type = '[Project] Update project name';
        constructor(public name: string) { }
    }

    export class Clear {
        static readonly type = '[Project] clear project';
    }
}