import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropCoordinatesComponent } from './form-block-prop-coordinates.component';

describe('FormBlockPropCoordinatesComponent', () => {
  let component: FormBlockPropCoordinatesComponent;
  let fixture: ComponentFixture<FormBlockPropCoordinatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBlockPropCoordinatesComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
