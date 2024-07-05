import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { FormDragEvent } from "../models/FormDragEvent";

@Injectable()
export class FormDragService {

    private dragFormChanges$: Subject<FormDragEvent> = new Subject();

    dragForm(event: FormDragEvent) {
        this.dragFormChanges$.next(event);
    }

    dragChanges(): Observable<FormDragEvent> {
        return this.dragFormChanges$;
    }
}