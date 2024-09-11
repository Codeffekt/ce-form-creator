import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropNumberComponent } from './form-block-prop-number.component';

describe('FormBlockPropNumberComponent', () => {
  let component: FormBlockPropNumberComponent;
  let fixture: ComponentFixture<FormBlockPropNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBlockPropNumberComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
