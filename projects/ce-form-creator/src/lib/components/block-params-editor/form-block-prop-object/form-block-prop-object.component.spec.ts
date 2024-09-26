import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropObjectComponent } from './form-block-prop-object.component';

describe('FormBlockPropObjectComponent', () => {
  let component: FormBlockPropObjectComponent;
  let fixture: ComponentFixture<FormBlockPropObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormBlockPropObjectComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
