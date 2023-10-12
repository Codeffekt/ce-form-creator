import { AfterViewInit, Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'ce-container-header',
  template: '<ng-content></ng-content>'
})
export class CeContainerHeaderComponent { }

@Component({
  selector: 'ce-container-footer',
  template: '<ng-content></ng-content>'
})
export class CeContainerFooterComponent { }

@Component({
  selector: 'ce-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class CeContainerComponent implements AfterViewInit {

  @Input() padding?: string;
  @Input() horizontalPadding?: string;
  @Input() verticalPadding?: string;

  @Input() color?: string;

  @ContentChild(CeContainerHeaderComponent, { read: ElementRef }) headerElement?: ElementRef
  @ContentChild(CeContainerFooterComponent, { read: ElementRef }) footerElement?: ElementRef

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    if (this.color) {
      this.applyColor();
    }

    if (this.padding) {
      this.applyPadding(this.padding);
      return;
    }

    if (this.horizontalPadding) {
      this.applyHorizontalPadding(this.horizontalPadding);
    }

    if (this.verticalPadding) {
      this.applyVerticalPadding(this.verticalPadding);
    }
  }

  private applyPadding(padding: string) {
    this.applyHorizontalPadding(padding);
    this.applyVerticalPadding(padding);
  }

  private applyHorizontalPadding(padding: string) {
    if (this.headerElement) {
      this.headerElement.nativeElement.style.padding = padding;
    }

    if (this.footerElement) {
      this.footerElement.nativeElement.style.padding = `0px ${padding}`;
    }
  }

  private applyVerticalPadding(padding: string) {
    this.elementRef.nativeElement.style.paddingTop = padding;
    this.elementRef.nativeElement.style.paddingBottom = padding;
  }

  private applyColor() {
    this.elementRef.nativeElement.classList.add(`bg-${this.color}`)
  }
}