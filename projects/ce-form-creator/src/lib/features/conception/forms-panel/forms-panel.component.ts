import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { CanvasForm } from '../../../core/models';

@Component({
  selector: 'ce-forms-panel',
  templateUrl: './forms-panel.component.html',
  styleUrls: ['./forms-panel.component.scss']
})
export class FormsPanelComponent implements OnInit {

  @Input() canvasForms: CanvasForm[] = [];

  constructor() { }

  ngOnInit(): void { }

  identify(index: number, item: CanvasForm) {
    return item.form.id;
  }
}
