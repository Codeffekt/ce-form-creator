import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropUnknownComponent } from './form-block-prop-unknown.component';

describe('FormBlockPropUnknownComponent', () => {
  let component: FormBlockPropUnknownComponent;
  let fixture: ComponentFixture<FormBlockPropUnknownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormBlockPropUnknownComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropUnknownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
