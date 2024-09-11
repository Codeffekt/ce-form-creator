import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropBarcodeComponent } from './form-block-prop-barcode.component';

describe('FormBlockPropBarcodeComponent', () => {
  let component: FormBlockPropBarcodeComponent;
  let fixture: ComponentFixture<FormBlockPropBarcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBlockPropBarcodeComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
