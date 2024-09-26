import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockRootComponent } from './canvas-block-root.component';

describe('CanvasBlockRootComponent', () => {
  let component: CanvasBlockRootComponent;
  let fixture: ComponentFixture<CanvasBlockRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CanvasBlockRootComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
