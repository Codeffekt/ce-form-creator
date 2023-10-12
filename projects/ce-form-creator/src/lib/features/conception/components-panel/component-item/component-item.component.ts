import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ce-component-item',
  templateUrl: './component-item.component.html',
  styleUrls: ['./component-item.component.scss']
})
export class CeComponentItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'ce-component-item-label',
  template: '<ng-content></ng-content>',
})
export class CeComponentItemLabelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}