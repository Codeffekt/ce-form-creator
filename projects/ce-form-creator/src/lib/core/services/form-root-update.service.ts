import { Injectable } from "@angular/core";
import { FORM_BLOCK_TYPE_TEXT, FormBlock, IndexType } from "@codeffekt/ce-core-data";
import { Store } from "@ngxs/store";
import { Observable, Subject, debounceTime } from "rxjs";
import { Forms, FormsSelectors } from "../store";
import { FieldNamingService } from "./field-naming.service";
import { CanvasForm } from "../models";

const UPDATE_DEBOUNCE_TIME_MS = 500;

@Injectable()
export class FormRootUpdateService {


    private doUpdate$ = new Subject<CanvasForm>();

    constructor(
        private store: Store,
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
        formId: IndexType,
        blockField: IndexType,
        options: { emitEvent: boolean } = { emitEvent: true }) {

        const canvasForm = this.store.selectSnapshot<CanvasForm|undefined>(FormsSelectors.formWithId(formId))        

        if(!canvasForm) {
            return undefined;
        }

        const block = canvasForm.form.content[blockField];

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
            this.store.dispatch(new Forms.UpdateForms([ newCanvasForm ]));
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

    deleteForm(formId: IndexType) {

        const canvasForm = this.store.selectSnapshot<CanvasForm|undefined>(FormsSelectors.formWithId(formId))        

        if(!canvasForm) {
            return;
        }

        this.store.dispatch(new Forms.RemoveForms([ canvasForm ]));
    }    

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