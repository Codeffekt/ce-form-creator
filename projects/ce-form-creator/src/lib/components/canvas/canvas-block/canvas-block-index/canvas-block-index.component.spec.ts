import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockIndexComponent } from './canvas-block-index.component';

describe('CanvasBlockIndexComponent', () => {
  let component: CanvasBlockIndexComponent;
  let fixture: ComponentFixture<CanvasBlockIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBlockIndexComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
