import { Injectable, Type } from "@angular/core";
import { FormBlockType } from "@codeffekt/ce-core-data";
import { FormBlockEditComponents, FormBlockEditComponentType, FormBlockEditStore } from "../models/FormBlockEdit";

@Injectable({ providedIn: 'root'})
export class FormBlockEditStoreService {

    private store: FormBlockEditStore = {
        components: {}
    };

    getComponentType(type: FormBlockType): Type<FormBlockEditComponentType> {

        const component = this.store.components[type];

        if(!component) {
            throw new Error(`No block edit store component found for type ${type}`);
        }

        return this.store.components[type];        
    }

    setComponents(components: FormBlockEditComponents) {
        Object.keys(components)
            .forEach(type => this.store.components[type] = components[type]);
    }
}