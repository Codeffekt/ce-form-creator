import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropIndexComponent } from './form-block-prop-index.component';

describe('FormBlockPropIndexComponent', () => {
  let component: FormBlockPropIndexComponent;
  let fixture: ComponentFixture<FormBlockPropIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBlockPropIndexComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
