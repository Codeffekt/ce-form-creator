import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ce-form-creator-history-item',
  templateUrl: './form-creator-history-item.component.html',
  styleUrls: ['./form-creator-history-item.component.scss']
})
export class FormCreatorHistoryItemComponent implements OnInit {

  @Input() date!: string;
  @Input() form!: string;
  @Input() block!: string;
  @Input() action!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
