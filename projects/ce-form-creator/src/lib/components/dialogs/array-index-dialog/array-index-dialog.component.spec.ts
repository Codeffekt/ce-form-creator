import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayIndexDialogComponent } from './array-index-dialog.component';

describe('ArrayIndexDialogComponent', () => {
  let component: ArrayIndexDialogComponent;
  let fixture: ComponentFixture<ArrayIndexDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArrayIndexDialogComponent]
    });
    fixture = TestBed.createComponent(ArrayIndexDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
