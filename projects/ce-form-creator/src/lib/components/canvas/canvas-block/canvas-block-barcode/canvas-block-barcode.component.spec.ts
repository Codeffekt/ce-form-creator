import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockBarcodeComponent } from './canvas-block-barcode.component';

describe('CanvasBlockBarcodeComponent', () => {
  let component: CanvasBlockBarcodeComponent;
  let fixture: ComponentFixture<CanvasBlockBarcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBlockBarcodeComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
