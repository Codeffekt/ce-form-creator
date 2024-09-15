import { Injectable } from "@angular/core";
import { FORM_BLOCK_TYPE_TEXT, FormBlock, FormRoot, IndexType } from "@codeffekt/ce-core-data";
import { Actions, Select, Store } from "@ngxs/store";
import { Observable, Subject, Subscription, debounceTime } from "rxjs";
import { Forms, FormsSelectors } from "../store";
import { FieldNamingService } from "./field-naming.service";

const UPDATE_DEBOUNCE_TIME_MS = 500;

@Injectable()
export class FormRootUpdateService {

    @Select(FormsSelectors.allForms) private forms$!: Observable<FormRoot[]>;

    private doUpdate$ = new Subject<FormRoot>();
    private subscription?: Subscription;

    constructor(
        private store: Store,
        private actions$: Actions,
        private namingService: FieldNamingService,
    ) {
        this.init();
    }

    async update(root: FormRoot) {
        this.doUpdate$.next(root);
    }

    listenUpdates(formId: IndexType): Observable<FormRoot | undefined> {
        return this.store.select(FormsSelectors.formWithId(formId));
    }

    deleteBlock(
        root: FormRoot,
        block: FormBlock,
        options: { emitEvent: boolean } = { emitEvent: true }) {

        const blockKeys = Object.keys(root.content).filter(key => key !== block.field);
        var content: { [field: string]: FormBlock } = {};
        for (var key of blockKeys) {
            content[key] = root.content[key];
        }

        const newRoot = {
            ...root, content
        }

        if (options.emitEvent) {
            this.store.dispatch(new Forms.UpdateForm(newRoot));
        }

        return newRoot;
    }

    addNewBlock(
        root: FormRoot,
        block: FormBlock,
        options: { emitEvent: boolean } = { emitEvent: true }): { form: FormRoot, block: FormBlock } {

        const field = this.namingService
            .generateFieldName(root, block.type ?? FORM_BLOCK_TYPE_TEXT);
        const newRoot = {
            ...root, content: {
                ...root.content, [field]: {
                    ...block,
                    field
                }
            }
        };
        if (options.emitEvent) {
            this.store.dispatch(new Forms.UpdateForm(newRoot));
        }
        return { form: newRoot, block: newRoot.content[field] };
    }

    deleteForm(form: FormRoot) {
        this.store.dispatch(new Forms.RemoveForms([form]));
    }

    addForm(form: FormRoot) {
        this.store.dispatch(new Forms.AddForms([form]));
    }

    private init() {
        // TODO: Shoud unsubscribe
        this.doUpdate$
            .pipe(
                debounceTime(UPDATE_DEBOUNCE_TIME_MS),
            )
            .subscribe(root =>
                this.store.dispatch(new Forms.UpdateForm(root))
            );
    }
}