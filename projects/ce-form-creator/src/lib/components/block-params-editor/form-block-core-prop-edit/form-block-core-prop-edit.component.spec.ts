import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockCorePropEditComponent } from './form-block-core-prop-edit.component';

describe('FormBlockCorePropEditComponent', () => {
  let component: FormBlockCorePropEditComponent;
  let fixture: ComponentFixture<FormBlockCorePropEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBlockCorePropEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBlockCorePropEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
