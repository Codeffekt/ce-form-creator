import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockNumberComponent } from './canvas-block-number.component';

describe('CanvasBlockNumberComponent', () => {
  let component: CanvasBlockNumberComponent;
  let fixture: ComponentFixture<CanvasBlockNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBlockNumberComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
