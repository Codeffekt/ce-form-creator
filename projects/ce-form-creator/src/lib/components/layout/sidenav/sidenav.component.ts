import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ce-sidenav-container',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class CeSidenavContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}

@Component({
  selector: 'ce-sidenav',
  template: '<ng-content></ng-content>'
})

export class CeSidenav implements AfterViewInit {

  @Input() width?: string;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    if (this.width) {
      this.elementRef.nativeElement.style.width = this.width;
    }
  }
}

@Component({
  selector: 'ce-sidenav-content',
  template: '<ng-content></ng-content>'
})

export class CeSidenavContent implements OnInit {
  constructor() { }

  ngOnInit() { }
}