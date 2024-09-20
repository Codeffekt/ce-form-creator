import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorsDialogComponent } from './validators-dialog.component';

describe('ValidatorsDialogComponent', () => {
  let component: ValidatorsDialogComponent;
  let fixture: ComponentFixture<ValidatorsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ValidatorsDialogComponent]
    });
    fixture = TestBed.createComponent(ValidatorsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
