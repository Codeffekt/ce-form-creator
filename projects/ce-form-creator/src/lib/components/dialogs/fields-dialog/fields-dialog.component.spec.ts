import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsDialogComponent } from './fields-dialog.component';

describe('FieldsDialogComponent', () => {
  let component: FieldsDialogComponent;
  let fixture: ComponentFixture<FieldsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FieldsDialogComponent]
    });
    fixture = TestBed.createComponent(FieldsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
