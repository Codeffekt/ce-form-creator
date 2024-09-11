import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootSelectionDialogComponent } from './root-selection-dialog.component';

describe('RootSelectionDialogComponent', () => {
  let component: RootSelectionDialogComponent;
  let fixture: ComponentFixture<RootSelectionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RootSelectionDialogComponent]
    });
    fixture = TestBed.createComponent(RootSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
