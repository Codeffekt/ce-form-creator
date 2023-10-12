import { Component, OnInit } from '@angular/core';

import { FormRoot } from "@codeffekt/ce-core-data";

const FORM_TECH: FormRoot = {
  "id": "forms-tech",
  "ctime": 1638275198813,
  "mtime": 1665653618512,
  "table": "techs",
  "title": "Technique",
  "content": {
    "label": {
      "type": "text",
      "field": "label",
      "label": "Nom"
    },
    "value": {
      "type": "text",
      "field": "value",
      "label": "Id"
    },
    "tech": {
      "type": "text",
      "field": "tech",
      "label": "Tech"
    },
    "options": {
      "type": "text",
      "field": "options",
      "label": "Options"
    }
  }
};

const FORM_PHOTO: FormRoot = {
  "id": "forms-photo",
  "ctime": 1638275198813,
  "mtime": 1665653596521,
  "title": "Photo",
  "content": {
    "asset": {
      "type": "asset",
      "field": "asset"
    },
    "timestamp": {
      "type": "timestamp",
      "field": "timestamp",
      "label": "Date / Heure",
      "params": {
        "date": true,
        "time": true,
        "format": "HH:mm",
        "timeFormat": "HH:mm"
      }
    }
  }
};

const FORM_HARDWARE: FormRoot = {
  id: "form-hardware",
  ctime: 0,
  title: "Matériel",
  content: {
    name: {
      type: "text",
      field: "name",
      label: "Nom"
    },
    barcode: {
      type: "barcode",
      field: "barcode",
      label: "Code-barres"
    },
    comment: {
      type: "text",
      field: "comment",
      label: "Commentaire"
    }
  }
};

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit {

  forms = [FORM_TECH, FORM_HARDWARE, FORM_PHOTO];

  constructor() { }

  ngOnInit(): void {
  }

  onSave(forms: FormRoot[]) {
    console.log('onSave - forms editing');
  }

  onCancel() {
    console.log('onCancel - forms editing');
  }
}
