import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropTextComponent } from './form-block-prop-text.component';

describe('FormBlockPropTextComponent', () => {
  let component: FormBlockPropTextComponent;
  let fixture: ComponentFixture<FormBlockPropTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBlockPropTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBlockPropTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
