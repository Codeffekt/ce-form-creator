import { FormRoot } from "@codeffekt/ce-core-data";

const FORM_TECH: FormRoot = {
  "id": "forms-tech",
  "type": "forms-tech",
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
      "type": "number",
      "field": "value",
      "label": "Value"
    },
    "tech": {
      "type": "text",
      "field": "tech",
      "label": "Tech"
    },
    "barcode": {
      "type": "barcode",
      "field": "barcode",
      "label": "Code-barres",
    },
    "options": {
      "type": "text",
      "field": "options",
      "label": "Options"
    },
    hardware: {
      type: "index",
      field: "hardware",
      label: "Matériel",
      root: "form-hardware"
    }
  }
};

const FORM_PHOTO: FormRoot = {
  "id": "forms-photo",
  "type": "forms-photo",
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
  type: "form-hardware",
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
    },
    photos: {
      type: "formArray",
      root: "forms-photo",
      field: "photos",
      label: "Photos",
      index: "hardware"
    }
  }
};

export const LOCAL_FORMS = [
  FORM_TECH, FORM_HARDWARE, FORM_PHOTO
];

