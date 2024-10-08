import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropActionComponent } from './form-block-prop-action.component';

describe('FormBlockPropActionComponent', () => {
  let component: FormBlockPropActionComponent;
  let fixture: ComponentFixture<FormBlockPropActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormBlockPropActionComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
