import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockTimestampComponent } from './canvas-block-timestamp.component';

describe('CanvasBlockTimestampComponent', () => {
  let component: CanvasBlockTimestampComponent;
  let fixture: ComponentFixture<CanvasBlockTimestampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBlockTimestampComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
