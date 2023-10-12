import { Injectable } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Forms, FormsSelectors } from '../store';

@Injectable()
export class CreatorFormsService {

    @Select(FormsSelectors.allForms) private forms$: Observable<FormRoot[]> | undefined;

    constructor(private store: Store) { }

    init(forms: FormRoot[]) {
        this.store.dispatch(new Forms.Init(forms));
    }

    addForms(forms: FormRoot[]) {
        this.store.dispatch(new Forms.AddForms(forms));
    }

    removeForms(forms: FormRoot[]) {
        this.store.dispatch(new Forms.RemoveForms(forms));
    }

    formsChanges(): Observable<FormRoot[]> | undefined {
        return this.forms$;
    }

    getForms(): FormRoot[] {
        return this.store.selectSnapshot<FormRoot[]>((state) => state.formsState.forms);
    }
}