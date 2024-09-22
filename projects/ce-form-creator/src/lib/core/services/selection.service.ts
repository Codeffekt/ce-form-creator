import { Injectable } from '@angular/core';
import { FormBlock } from '@codeffekt/ce-core-data';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CanvasForm, FormCreatorContext } from '../models';
import { Selection, SelectionAdapter, SelectionSelectors, SelectionState, SelectionStateModel } from '../store/selection';
import { FormsState, FormsStateModel } from '../store/forms';

@Injectable()
export class CreatorSelectionService {

  @Select(SelectionSelectors.get) selection$!: Observable<FormCreatorContext | undefined>;
  @Select(SelectionSelectors.formChanges) selectionFormChanges$!: Observable<CanvasForm | undefined>;
  @Select(SelectionSelectors.blockChanges) selectionBlockChanges$!: Observable<FormCreatorContext | undefined>;

  constructor(private store: Store) { }

  selectForm(form: CanvasForm) {    
    this.store.dispatch(new Selection.SelectForm(form.form.id));
  }

  selectBlock(form: CanvasForm, block: FormBlock) {
    this.store.dispatch(new Selection.SelectBlock(form.form.id, block.field));
  }

  selectionFormChanges(): Observable<CanvasForm | undefined> {
    return this.selectionFormChanges$;
  }

  selectionChanges(): Observable<FormCreatorContext | undefined> {
    return this.selection$;
  }

  blockSelectionChanges(): Observable<FormCreatorContext | undefined> {
    return this.selectionBlockChanges$;
  }

  static isSelectionMatch(selection: FormCreatorContext | undefined, form: CanvasForm, block?: FormBlock): boolean {
    return selection?.form.form.id === form.form.id && selection?.block?.field === block?.field;
  }

  getCurrentSelection(): FormCreatorContext | undefined {
    const selection = this.store.selectSnapshot<SelectionStateModel>(SelectionState);
    const forms = this.store.selectSnapshot<FormsStateModel>(FormsState);
    return SelectionAdapter.stateModelToCreatorContext(selection, forms.forms);  
  }
}
