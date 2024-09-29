import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockUnknownComponent } from './canvas-block-unknown.component';

describe('CanvasBlockUnknownComponent', () => {
  let component: CanvasBlockUnknownComponent;
  let fixture: ComponentFixture<CanvasBlockUnknownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CanvasBlockUnknownComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockUnknownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
