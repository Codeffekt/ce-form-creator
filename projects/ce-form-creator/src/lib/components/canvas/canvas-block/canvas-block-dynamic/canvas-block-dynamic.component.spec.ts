import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockDynamicComponent } from './canvas-block-dynamic.component';

describe('CanvasBlockDynamicComponent', () => {
  let component: CanvasBlockDynamicComponent;
  let fixture: ComponentFixture<CanvasBlockDynamicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBlockDynamicComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
