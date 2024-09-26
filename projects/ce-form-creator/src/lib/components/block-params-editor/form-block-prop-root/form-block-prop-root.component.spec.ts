import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropRootComponent } from './form-block-prop-root.component';

describe('FormBlockPropRootComponent', () => {
  let component: FormBlockPropRootComponent;
  let fixture: ComponentFixture<FormBlockPropRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormBlockPropRootComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
