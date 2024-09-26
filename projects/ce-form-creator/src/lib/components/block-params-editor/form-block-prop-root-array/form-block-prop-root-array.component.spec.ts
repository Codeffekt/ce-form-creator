import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropRootArrayComponent } from './form-block-prop-root-array.component';

describe('FormBlockPropRootArrayComponent', () => {
  let component: FormBlockPropRootArrayComponent;
  let fixture: ComponentFixture<FormBlockPropRootArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormBlockPropRootArrayComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropRootArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
