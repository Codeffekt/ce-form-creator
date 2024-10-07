import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropFactoryComponent } from './form-block-prop-factory.component';

describe('FormBlockPropFactoryComponent', () => {
  let component: FormBlockPropFactoryComponent;
  let fixture: ComponentFixture<FormBlockPropFactoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormBlockPropFactoryComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
