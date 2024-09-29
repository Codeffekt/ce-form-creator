import { Injectable, Type } from "@angular/core";
import { FormBlockType } from "@codeffekt/ce-core-data";
import { CanvasBlockComponents, CanvasBlockComponentType, CanvasBlockStore } from "../models/CanvasBlock";
import { CanvasBlockUnknownComponent } from "../../components/canvas/canvas-block/canvas-block-unknown";

@Injectable({ providedIn: 'root'})
export class CanvasBlockStoreService {

    private store: CanvasBlockStore = {
        components: {}
    };

    getComponentType(type: FormBlockType): Type<CanvasBlockComponentType> {

        const component = this.store.components[type];

        if(!component) {
            return CanvasBlockUnknownComponent;
        }

        return this.store.components[type];        
    }

    setComponents(components: CanvasBlockComponents) {
        Object.keys(components)
            .forEach(type => this.store.components[type] = components[type]);
    }
}