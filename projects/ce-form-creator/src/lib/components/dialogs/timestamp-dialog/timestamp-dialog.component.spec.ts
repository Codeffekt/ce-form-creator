import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampDialogComponent } from './timestamp-dialog.component';

describe('TimestampDialogComponent', () => {
  let component: TimestampDialogComponent;
  let fixture: ComponentFixture<TimestampDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimestampDialogComponent]
    });
    fixture = TestBed.createComponent(TimestampDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
