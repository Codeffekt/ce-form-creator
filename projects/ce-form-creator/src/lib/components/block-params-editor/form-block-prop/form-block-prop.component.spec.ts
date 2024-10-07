import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropComponent } from './form-block-prop.component';

describe('FormBlockPropComponent', () => {
  let component: FormBlockPropComponent;
  let fixture: ComponentFixture<FormBlockPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBlockPropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBlockPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
