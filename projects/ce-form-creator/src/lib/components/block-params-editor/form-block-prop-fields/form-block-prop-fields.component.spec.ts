import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropFieldsComponent } from './form-block-prop-fields.component';

describe('FormBlockPropFieldsComponent', () => {
  let component: FormBlockPropFieldsComponent;
  let fixture: ComponentFixture<FormBlockPropFieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormBlockPropFieldsComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
