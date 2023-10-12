import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatorMaskComponent } from './form-creator-mask.component';

describe('FormCreatorMaskComponent', () => {
  let component: FormCreatorMaskComponent;
  let fixture: ComponentFixture<FormCreatorMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreatorMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreatorMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
