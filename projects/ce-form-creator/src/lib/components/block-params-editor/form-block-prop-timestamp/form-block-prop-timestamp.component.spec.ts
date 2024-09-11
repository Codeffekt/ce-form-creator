import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropTimestampComponent } from './form-block-prop-timestamp.component';

describe('FormBlockPropTimestampComponent', () => {
  let component: FormBlockPropTimestampComponent;
  let fixture: ComponentFixture<FormBlockPropTimestampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBlockPropTimestampComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
