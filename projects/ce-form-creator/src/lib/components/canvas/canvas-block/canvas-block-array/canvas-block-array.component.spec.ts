import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockArrayComponent } from './canvas-block-array.component';

describe('CanvasBlockArrayComponent', () => {
  let component: CanvasBlockArrayComponent;
  let fixture: ComponentFixture<CanvasBlockArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBlockArrayComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
