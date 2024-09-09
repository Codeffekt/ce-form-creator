import { Component, OnInit } from '@angular/core';
import { FormBlock } from '@codeffekt/ce-core-data';

export interface CeFormCreatorComponentItem {
  label: string;
  icon: string;
  block: FormBlock
}

@Component({
  selector: 'ce-components-panel',
  templateUrl: './components-panel.component.html',
  styleUrls: ['./components-panel.component.scss']
})
export class CeComponentsPanel implements OnInit {

  components: CeFormCreatorComponentItem[] = [
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
        type: 'text'
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
      label: 'Code-barres',
      icon: 'qr_code',
      block: {
        field: 'barcode',
        type: 'barcode',
        label: 'Code-barres'
      }
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
  ]

  constructor() { }

  ngOnInit(): void { }
}
