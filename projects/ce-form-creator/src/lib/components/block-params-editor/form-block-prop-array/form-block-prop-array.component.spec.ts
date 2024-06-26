import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropArrayComponent } from './form-block-prop-array.component';

describe('FormBlockPropArrayComponent', () => {
  let component: FormBlockPropArrayComponent;
  let fixture: ComponentFixture<FormBlockPropArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBlockPropArrayComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
