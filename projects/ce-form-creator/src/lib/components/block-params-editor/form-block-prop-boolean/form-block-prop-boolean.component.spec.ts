import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropBooleanComponent } from './form-block-prop-boolean.component';

describe('FormBlockPropBooleanComponent', () => {
  let component: FormBlockPropBooleanComponent;
  let fixture: ComponentFixture<FormBlockPropBooleanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBlockPropBooleanComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
