import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTreeInputComponent } from './form-tree-input.component';

describe('FormTreeInputComponent', () => {
  let component: FormTreeInputComponent;
  let fixture: ComponentFixture<FormTreeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTreeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTreeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
