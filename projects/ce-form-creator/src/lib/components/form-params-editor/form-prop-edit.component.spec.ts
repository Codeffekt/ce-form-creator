import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPropEditComponent } from './form-prop-edit.component';

describe('FormPropEditComponent', () => {
  let component: FormPropEditComponent;
  let fixture: ComponentFixture<FormPropEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPropEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPropEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
