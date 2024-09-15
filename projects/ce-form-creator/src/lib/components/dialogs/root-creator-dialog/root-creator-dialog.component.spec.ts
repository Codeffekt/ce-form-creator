import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCreatorDialogComponent } from './root-creator-dialog.component';

describe('RootCreatorDialogComponent', () => {
  let component: RootCreatorDialogComponent;
  let fixture: ComponentFixture<RootCreatorDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RootCreatorDialogComponent]
    });
    fixture = TestBed.createComponent(RootCreatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
