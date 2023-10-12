import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';

@Component({
  selector: 'ce-forms-panel',
  templateUrl: './forms-panel.component.html',
  styleUrls: ['./forms-panel.component.scss']
})
export class FormsPanelComponent implements OnInit {

  @Input() forms: FormRoot[] = [];

  constructor() { }

  ngOnInit(): void { }

  identify(index: number, item: FormRoot) {
    return item.id;
  }
}
