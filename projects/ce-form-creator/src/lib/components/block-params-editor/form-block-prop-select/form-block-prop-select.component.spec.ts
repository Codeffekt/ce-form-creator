import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropSelectComponent } from './form-block-prop-select.component';

describe('FormBlockPropSelectComponent', () => {
  let component: FormBlockPropSelectComponent;
  let fixture: ComponentFixture<FormBlockPropSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBlockPropSelectComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
