import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropFactoryComponent } from './form-block-prop-factory.component';

describe('FormBlockPropFactoryComponent', () => {
  let component: FormBlockPropFactoryComponent;
  let fixture: ComponentFixture<FormBlockPropFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBlockPropFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBlockPropFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
