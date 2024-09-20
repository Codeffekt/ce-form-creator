import { Selector } from "@ngxs/store";
import { ProjectFormatContext } from "../../../project/ProjectFormat";
import { ProjectState, ProjectStateModel } from "./project.state";

export class ProjectSelectors {

    @Selector([ProjectState])
    static getProject(state: ProjectStateModel): ProjectFormatContext {
        return state.context;
    }
}