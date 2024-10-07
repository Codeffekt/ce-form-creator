import { inject, Injectable } from "@angular/core";
import { FormBlockIconsService } from "./form-block-icons.service";
import { CeFormCreatorComponentItem } from "../models";


@Injectable({ providedIn: 'root' })
export class FormBlockListService {

  private blockIconsService = inject(FormBlockIconsService);

  private blocksFactory: { [key: string]: CeFormCreatorComponentItem } = {
    "simple-text": {
      label: 'Texte',
      icon: this.blockIconsService.getIconFromType("text"),
      block: {
        field: 'text',
        type: 'text',
        label: 'Texte'
      },
    },
    "model": {
      label: 'Modèle',
      icon: this.blockIconsService.getIconFromType("root"),
      block: {
        field: 'root',
        type: 'root',
        label: 'Modèle',
      }
    },
    "factory": {
      label: 'Factory',
      icon: this.blockIconsService.getIconFromType("factory"),
      block: {
        field: 'factory',
        type: 'factory',
        label: 'Factory',
      }
    },
    "action": {
      label: 'Action',
      icon: this.blockIconsService.getIconFromType("action"),
      block: {
        field: 'action',
        type: 'action',
        label: 'Action',
      }
    }
  };

  getBlockComponent(id: string): CeFormCreatorComponentItem {
    return this.blocksFactory[id];
  }
}