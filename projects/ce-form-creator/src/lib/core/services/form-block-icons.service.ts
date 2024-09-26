import { Injectable } from "@angular/core";
import { FormBlock } from "@codeffekt/ce-core-data";

const blocksIconFactory: {[key: string]: string} = {
    "text": "title",
    "number": "123",
    "barcode": "qr_code",
    "timestamp": "schedule",
    "index": "view_agenda",
    "formArray": "dataset",
    "formAssoc": "dataset",
    "asset": "image",
    "boolean": "toggle_off",
    "select": "format_list_bulleted",
    "coordinates": "location_on",
    'assetArray': "dataset",
    'root': "apps",
    'rootArray': "dataset",
    "object": "description",
};

@Injectable({providedIn:'root'})
export class FormBlockIconsService {

    getIconFromBlock(block: FormBlock) {

        if(!block.type) {
            throw new Error(`Invalid block ${block}, not type found`);
        }

        return blocksIconFactory[block.type];
    }

    getIconFromType(type: string) {
        return blocksIconFactory[type];
    }
}