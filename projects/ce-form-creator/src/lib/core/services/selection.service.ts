import { Injectable } from '@angular/core';
import { FormBlock, FormRoot } from '@codeffekt/ce-core-data';
import { Select, Store } from '@ngxs/store';
import { Observable, map } from 'rxjs';
import { FormCreatorContext } from '../models';
import { Selection, SelectionSelectors, SelectionState, SelectionStateModel } from '../store/selection';

@Injectable()
export class CreatorSelectionService {

  @Select(SelectionSelectors.get) selection$!: Observable<FormCreatorContext | undefined>;
  @Select(SelectionSelectors.formChanges) selectionFormChanges$!: Observable<FormRoot | undefined>;
  @Select(SelectionSelectors.blockChanges) selectionBlockChanges$!: Observable<FormCreatorContext | undefined>;

  constructor(private store: Store) { }

  selectForm(form: FormRoot) {
    this.store.dispatch(new Selection.SelectForm(form));
  }

  selectBlock(form: FormRoot, block: FormBlock) {
    this.store.dispatch(new Selection.SelectBlock(form, block));
  }

  selectionFormChanges(): Observable<FormRoot | undefined> {
    return this.selectionFormChanges$;
  }

  selectionChanges(): Observable<FormCreatorContext | undefined> {
    return this.selection$;
  }

  blockSelectionChanges(): Observable<FormCreatorContext | undefined> {
    return this.selectionBlockChanges$;
  }

  static isSelectionMatch(selection: FormCreatorContext | undefined, form: FormRoot, block?: FormBlock): boolean {
    return selection?.form.id === form.id && selection?.block?.field === block?.field;
  }

  getCurrentSelection() {
    const selection = this.store.selectSnapshot<SelectionStateModel>(SelectionState);
    return { form: selection.form, block: selection.block };
  }
}
