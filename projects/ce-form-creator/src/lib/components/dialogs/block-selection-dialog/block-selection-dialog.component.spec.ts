import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSelectionDialogComponent } from './block-selection-dialog.component';

describe('BlockSelectionDialogComponent', () => {
  let component: BlockSelectionDialogComponent;
  let fixture: ComponentFixture<BlockSelectionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlockSelectionDialogComponent]
    });
    fixture = TestBed.createComponent(BlockSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
