import { ProjectFormat } from "@codeffekt/ce-form-creator";
import { FORM_HARDWARE, FORM_PHOTO, FORM_TECH } from "./forms";

export const LOCAL_PROJECT: ProjectFormat = {
  "context": {
    "name": "Piezo",
    "version": "1.0",
    "author": "contact@codeffekt.com",
    "ctime": 1726745448839,
    "mtime": 1726750030565
  },
  "forms": [
    FORM_HARDWARE,
    FORM_TECH,
    FORM_PHOTO,
  ],
  "layout": {
    "nodes": [
      {
        "id": "form-hardware",
        "coords": {
          "x": 0.4326171875,
          "y": 0.1533203125
        }
      },
      {
        "id": "forms-tech",
        "coords": {
          "x": 0.7509765625,
          "y": 0.1630859375
        }
      },
      {
        "id": "forms-photo",
        "coords": {
          "x": 0.1181640625,
          "y": 0.1494140625
        }
      }
    ]
  }
};