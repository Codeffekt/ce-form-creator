import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ce-components-section',
    templateUrl: './components-section.component.html',
    styleUrls: ['./components-section.component.scss'],
    standalone: false
})
export class CeComponentsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

@Component({
    selector: 'ce-components-section-title',
    template: '<ng-content></ng-content>',
    standalone: false
})
export class CeComponentsSectionTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
