import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockEditComponent } from './canvas-block.component';

describe('FormBlockEditFactoryComponent', () => {
  let component: FormBlockEditComponent;
  let fixture: ComponentFixture<FormBlockEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBlockEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBlockEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
