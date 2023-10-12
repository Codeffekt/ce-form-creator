import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropEditComponent } from './form-block-prop-edit.component';

describe('FormBlockPropEditComponent', () => {
  let component: FormBlockPropEditComponent;
  let fixture: ComponentFixture<FormBlockPropEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBlockPropEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBlockPropEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
