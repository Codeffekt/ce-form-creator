import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropValidatorsComponent } from './form-block-prop-validators.component';

describe('FormBlockPropValidatorsComponent', () => {
  let component: FormBlockPropValidatorsComponent;
  let fixture: ComponentFixture<FormBlockPropValidatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormBlockPropValidatorsComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
