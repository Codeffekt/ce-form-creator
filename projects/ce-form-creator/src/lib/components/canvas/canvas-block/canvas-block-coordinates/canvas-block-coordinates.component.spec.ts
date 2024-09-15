import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockCoordinatesComponent } from './canvas-block-coordinates.component';

describe('CanvasBlockCoordinatesComponent', () => {
  let component: CanvasBlockCoordinatesComponent;
  let fixture: ComponentFixture<CanvasBlockCoordinatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBlockCoordinatesComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
