import { Component, OnInit } from '@angular/core';
import { FormBlock } from '@codeffekt/ce-core-data';

interface CeFormCreatorComponentSection {
  title: string;
  components: CeFormCreatorComponentItem[];
}
interface CeFormCreatorComponentItem {
  label: string;
  icon: string;
  block: FormBlock
}

@Component({
  selector: 'ce-components-panel',
  templateUrl: './components-panel.component.html',
  styleUrls: ['./components-panel.component.scss']
})
export class CeComponentsPanel {

  sections: CeFormCreatorComponentSection[] = [
    {
      title: 'Composants',
      components: [
        {
          label: 'Texte',
          icon: 'title',
          block: {
            field: 'text',
            type: 'text',
            label: 'Texte'
          },
        },
        {
          label: 'Multiligne',
          icon: 'notes',
          block: {
            field: 'text',
            type: 'text',
            label: 'Multiligne'
          }
        },
        {
          label: 'Nombre',
          icon: '123',
          block: {
            field: 'number',
            type: 'number',
            label: 'Nombre'
          },
        },
        {
          label: 'Date',
          icon: 'schedule',
          block: {
            field: 'timestamp',
            type: 'timestamp',
            label: 'Date'
          }
        },
        {
          label: 'Sous-formulaire',
          icon: 'view_agenda',
          block: {
            field: 'index',
            type: 'index',
            root: undefined,
            label: 'Sous-formulaire'
          }
        },
        {
          label: 'Tableaux',
          icon: 'dataset',
          block: {
            field: 'array',
            type: 'formArray',
            root: undefined,
            index: undefined,
            label: 'Tableaux'
          }
        },
        {
          label: 'Associations',
          icon: 'title',
          block: {
            field: 'assoc',
            type: 'formAssoc',
            root: undefined,
            index: undefined,
            label: 'Associations'
          }
        }
      ],
    }, {
      title: 'Date',
      components: [{
        label: 'Jour/Heure',
        icon: 'calendar_month',
        block: {
          field: 'timestamp',
          type: 'timestamp',
          label: 'Jour/Heure'
        }
      }, {
        label: 'Heure',
        icon: 'schedule',
        block: {
          field: 'timestamp',
          type: 'timestamp',
          label: 'Heure'
        }
      }]
    }, {
      title: 'Éléments à choix',
      components: [{
        label: 'Oui/Non',
        icon: 'toggle_off',
        block: {
          field: 'boolean',
          type: 'boolean',
          label: 'Oui/Non'
        },
      }, {
        label: 'Liste',
        icon: 'format_list_bulleted',
        block: {
          field: 'list',
          type: 'select',
          label: 'Liste'
        },
      }, {
        label: 'Checkbox',
        icon: 'check_box',
        block: {
          field: 'checkbox',
          type: 'boolean',
          label: 'Checkbox'
        },
      }]
    }, {
      title: 'Média',
      components: [{
        label: 'Code-barres',
        icon: 'qr_code',
        block: {
          field: 'barcode',
          type: 'barcode',
          label: 'Code-barres'
        }
      }, {
        label: 'Fichier',
        icon: 'attachment',
        block: {
          field: 'file',
          type: 'asset',
          label: 'Fichier'
        }
      }, {
        label: 'Image',
        icon: 'image',
        block: {
          field: 'image',
          type: 'asset',
          label: 'Image'
        }
      }]
    }, {
      title: 'Sciences',
      components: [{
        label: 'Coordonnées',
        icon: 'location_on',
        block: {
          field: 'coordinates',
          type: 'coordinates',
          label: 'Coordonnées'
        }
      }]
    },];

  constructor() { }

  ngOnInit(): void { }
}
