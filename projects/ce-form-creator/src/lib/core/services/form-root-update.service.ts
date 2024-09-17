import { Injectable } from "@angular/core";
import { FORM_BLOCK_TYPE_TEXT, FormBlock, IndexType } from "@codeffekt/ce-core-data";
import { Actions, Select, Store } from "@ngxs/store";
import { Observable, Subject, Subscription, debounceTime } from "rxjs";
import { Forms, FormsSelectors } from "../store";
import { FieldNamingService } from "./field-naming.service";
import { CanvasForm } from "../models";

const UPDATE_DEBOUNCE_TIME_MS = 500;

@Injectable()
export class FormRootUpdateService {

    @Select(FormsSelectors.allForms) private forms$!: Observable<CanvasForm[]>;

    private doUpdate$ = new Subject<CanvasForm>();
    private subscription?: Subscription;

    constructor(
        private store: Store,
        private actions$: Actions,
        private namingService: FieldNamingService,
    ) {
        this.init();
    }

    async update(root: CanvasForm) {
        this.doUpdate$.next(root);
    }

    listenUpdates(formId: IndexType): Observable<CanvasForm | undefined> {
        return this.store.select(FormsSelectors.formWithId(formId));
    }    

    deleteBlock(
        canvasForm: CanvasForm,
        block: FormBlock,
        options: { emitEvent: boolean } = { emitEvent: true }) {

        const blockKeys = Object.keys(canvasForm.form.content).filter(key => key !== block.field);
        var content: { [field: string]: FormBlock } = {};
        for (var key of blockKeys) {
            content[key] = canvasForm.form.content[key];
        }

        const newCanvasForm = {
            ...canvasForm,
            form: {
                ...canvasForm.form,
                content
            }
        };      

        if (options.emitEvent) {
            this.store.dispatch(new Forms.UpdateForms([ newCanvasForm ]));
        }

        return newCanvasForm;
    }

    addNewBlock(
        canvasForm: CanvasForm,
        block: FormBlock,
        options: { emitEvent: boolean } = { emitEvent: true }): { form: CanvasForm, block: FormBlock } {

        const field = this.namingService
            .generateFieldName(canvasForm.form, block.type ?? FORM_BLOCK_TYPE_TEXT);        
        const newCanvasForm = {
            ...canvasForm,
            form: {
                ...canvasForm.form,
                content: {
                    ...canvasForm.form.content, [field]: {
                        ...block,
                        field
                    }
                }
            }
        }
        if (options.emitEvent) {
            this.store.dispatch(new Forms.UpdateForms([ newCanvasForm ]));
        }
        return { form: newCanvasForm, block: newCanvasForm.form.content[field] };
    }

    deleteForm(form: CanvasForm) {
        this.store.dispatch(new Forms.RemoveForms([form]));
    }

    // addForm(form: FormRoot) {
    //     this.store.dispatch(new Forms.AddForms([form]));
    // }

    private init() {
        // TODO: Shoud unsubscribe
        this.doUpdate$
            .pipe(
                debounceTime(UPDATE_DEBOUNCE_TIME_MS),
            )
            .subscribe(root =>
                this.store.dispatch(new Forms.UpdateForms([root]))
            );
    }
}