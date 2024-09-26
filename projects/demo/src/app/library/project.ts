import { ProjectFormat } from "@codeffekt/ce-form-creator";

export const LOCAL_PROJECT: ProjectFormat = {
    "context": {
      "name": "Piezo",
      "version": "1.0",
      "author": "contact@codeffekt.com",
      "ctime": 1726745448839,
      "mtime": 1726750030565
    },
    "forms": [
      {
        "id": "hardware",
        "ctime": 1726750047712,
        "title": "hardware",
        "content": {
          "name": {
            "field": "name",
            "type": "text",
            "label": "Multiligne"
          },
          "comment": {
            "field": "comment",
            "type": "text",
            "label": "Texte"
          },
          "barcode": {
            "field": "barcode",
            "type": "barcode",
            "label": "Code-barres"
          },
          "options": {
            "field": "options",
            "type": "select",
            "label": "Options",
            "params": {
              "options": [
                {
                  "label": "Ensoleillé",
                  "value": "shiny"
                },
                {
                  "label": "Pluvieux",
                  "value": "rainy"
                },
                {
                  "label": "Nuageux",
                  "value": "cloudy"
                }
              ],
            }
          }
        }
      }
    ],
    "layout": {
      "nodes": [{
        "id": "hardware",
        "coords": {
          "x": 0.26620269859153145,
          "y": 0.25485269721684506
        }
      }
    ]
  }};