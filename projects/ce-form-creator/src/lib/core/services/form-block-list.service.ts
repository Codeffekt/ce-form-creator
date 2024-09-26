import { inject, Injectable } from "@angular/core";
import { FormBlockIconsService } from "./form-block-icons.service";
import { CeFormCreatorComponentItem } from "../models";


@Injectable({ providedIn: 'root'})
export class FormBlockListService {

    private blockIconsService = inject(FormBlockIconsService);

    private blocksFactory: {[key: string]: CeFormCreatorComponentItem} = {        
        "simple-text": {
            label: 'Texte',
            icon: this.blockIconsService.getIconFromType("text"),
            block: {
              field: 'text',
              type: 'text',
              label: 'Texte'
            },
          },
    };

    getBlockComponent(id: string): CeFormCreatorComponentItem {
        return this.blocksFactory[id];
    }
}