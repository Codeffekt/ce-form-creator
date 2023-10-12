import { Component, Input, OnInit } from '@angular/core';
import { SplitComponent } from 'angular-split';

@Component({
  selector: 'ce-split-container',
  templateUrl: './split-container.component.html',
  styleUrls: ['./split-container.component.scss'],
  providers: [SplitComponent]

})
export class SplitContainerComponent implements OnInit {

  @Input() direction: 'vertical' | 'horizontal' = 'horizontal';
  constructor() { }

  ngOnInit(): void {
  }

}
