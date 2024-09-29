import { Injectable, Type } from "@angular/core";
import { FormBlockType } from "@codeffekt/ce-core-data";
import { FormBlockEditComponents, FormBlockEditComponentType, FormBlockEditStore } from "../models/FormBlockEdit";
import { FormBlockPropUnknownComponent } from "../../components/block-params-editor/form-block-prop-unknown";

@Injectable({ providedIn: 'root'})
export class FormBlockEditStoreService {

    private store: FormBlockEditStore = {
        components: {}
    };

    getComponentType(type: FormBlockType): Type<FormBlockEditComponentType> {

        const component = this.store.components[type];

        if(!component) {
            return FormBlockPropUnknownComponent;
        }

        return this.store.components[type];        
    }

    setComponents(components: FormBlockEditComponents) {
        Object.keys(components)
            .forEach(type => this.store.components[type] = components[type]);
    }
}