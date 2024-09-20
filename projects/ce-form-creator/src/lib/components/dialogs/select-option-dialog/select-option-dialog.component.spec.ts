import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionDialogComponent } from './select-option-dialog.component';

describe('SelectOptionDialogComponent', () => {
  let component: SelectOptionDialogComponent;
  let fixture: ComponentFixture<SelectOptionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SelectOptionDialogComponent]
    });
    fixture = TestBed.createComponent(SelectOptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
