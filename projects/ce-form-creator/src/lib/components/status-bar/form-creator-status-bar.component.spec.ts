import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatorStatusBarComponent } from './form-creator-status-bar.component';

describe('FormCreatorStatusBarComponent', () => {
  let component: FormCreatorStatusBarComponent;
  let fixture: ComponentFixture<FormCreatorStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreatorStatusBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreatorStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
