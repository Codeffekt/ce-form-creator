import { historyStateDefault, modeStateDefault, StoreStateSnapshot } from "../core";
import { ProjectFormat } from "./ProjectFormat";

export class ProjectFormatStateAdapter {    

    static convertProjectToState(project: ProjectFormat): StoreStateSnapshot {
        return {
            projectState: {
                context: {
                    ...project.context
                }
            },
            historyState: historyStateDefault,
            selectionState: {},
            modeState: modeStateDefault,
            formsState: {
                forms: project.forms.map(form => ({
                    form,
                    layout: project.layout
                        .find(l => l.id === form.id) ?? 
                            { id: form.id, coords: { x: 0, y: 0 }}
                }))
            }
        };
    }

    static convertStateToProject(state: StoreStateSnapshot): ProjectFormat {
        return {
            context: {
                ...state.projectState.context
            },
            forms: state.formsState.forms.map(form => form.form),
            layout: state.formsState.forms.map(form => form.layout),
        };
    }
}