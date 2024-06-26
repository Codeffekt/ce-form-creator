import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropAssocComponent } from './form-block-prop-assoc.component';

describe('FormBlockPropAssocComponent', () => {
  let component: FormBlockPropAssocComponent;
  let fixture: ComponentFixture<FormBlockPropAssocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBlockPropAssocComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropAssocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
