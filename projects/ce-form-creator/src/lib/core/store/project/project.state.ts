import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { History } from "../history/history.actions";
import { PROJECT_FORMAT_VERSION, ProjectFormatContext } from "../../../project/ProjectFormat";
import { Project } from "./project.actions";
import { Selection } from "../selection";
import { Forms } from "../forms";

export interface ProjectStateModel {
    context: ProjectFormatContext;
}

export const projectStateDefault: ProjectStateModel = {
    context: {
        name: 'Untitled',
        version: PROJECT_FORMAT_VERSION,
        author: 'contact@codeffekt.com',
        ctime: Date.now(),
        mtime: Date.now(),
    }
}

@State<ProjectStateModel>({
    name: 'projectState',
    defaults: projectStateDefault,
})
@Injectable()
export class ProjectState {    

    @Action(Project.Clear)
    clearProject(ctx: StateContext<ProjectStateModel>) {
        ctx.setState({
            ...projectStateDefault
        });        
        ctx.dispatch(new Selection.Clear());
        ctx.dispatch(new Forms.Clear());
        ctx.dispatch(new History.Clear());
    }

    @Action(Project.UpdateProject)
    updateProject(ctx: StateContext<ProjectStateModel>, { context }: Project.UpdateProject) {
        ctx.setState({
            context: {
                ...context
            }
        });
        ctx.dispatch(new History.AddProject({ context }));
    }

    @Action(Project.UpdateProjectName)
    updateProjectName(ctx: StateContext<ProjectStateModel>, { name }: Project.UpdateProjectName) {
        const state = ctx.getState();

        const context: ProjectFormatContext = {
            ...state.context,
            name,
            mtime: Date.now(),
        };

        ctx.setState({ context });
        ctx.dispatch(new History.AddProject({ context }));   
    }

    @Action(Project.Restore)
    restore(ctx: StateContext<ProjectStateModel>, { context }: Project.Restore) {
        ctx.setState({ context })
    }
}