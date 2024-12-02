import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPropFieldsComponent } from './form-prop-fields.component';

describe('FormPropFieldsComponent', () => {
  let component: FormPropFieldsComponent;
  let fixture: ComponentFixture<FormPropFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPropFieldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPropFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
