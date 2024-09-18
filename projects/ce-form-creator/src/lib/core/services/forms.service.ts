import { Injectable } from '@angular/core';
import { FormRoot, IndexType } from '@codeffekt/ce-core-data';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Forms, FormsSelectors } from '../store';
import { CanvasForm } from '../models';

@Injectable()
export class CreatorFormsService {

    @Select(FormsSelectors.allForms) private canvasForms$: Observable<CanvasForm[]> | undefined;    

    constructor(private store: Store) { }

    init(forms: FormRoot[]) {
        this.store.dispatch(new Forms.Init(
            forms.map(form => ({
                form,
                layout: {
                    id: form.id,
                    coords: {
                        x: 0,
                        y: 0
                    }
                }
            })),            
        ));
    }

    addForms(forms: FormRoot[]) {
        const existingForms = this.getForms();
        const formsToBeAdded = forms.filter(form => !existingForms.find(elt => elt.id === form.id));
        this.store.dispatch(new Forms.AddForms(
            formsToBeAdded.map(form => ({
                form,
                layout: {
                    id: form.id,
                    coords: {
                        x: 0,
                        y: 0
                    }
                }
            })),            
        ));
    }    

    //removeForms(forms: FormRoot[]) {
    //    this.store.dispatch(new Forms.RemoveForms(forms));
    //}

    canvasFormsChanges(): Observable<CanvasForm[]> | undefined {
        return this.canvasForms$;
    }

    getForms(): FormRoot[] {
        return this.store.selectSnapshot<FormRoot[]>((state) => state.formsState.forms.map((canvasForm: CanvasForm) => canvasForm.form));
    }

    getFormRoot(root: IndexType) {
        const roots = this.getForms();
        return roots.find(elt => elt.id === root);
    }

    createNewForm(root: IndexType) {
        const existingRoot = this.getFormRoot(root);
        if(existingRoot) {
            throw new Error(`Cannot create ${root} already exists`);
        }
        this.addForms([
            {
                id: root,
                ctime: Date.now(),
                title: root,
                content: {}
            }
        ]);
    }
}