import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockRootArrayComponent } from './canvas-block-root-array.component';

describe('CanvasBlockRootArrayComponent', () => {
  let component: CanvasBlockRootArrayComponent;
  let fixture: ComponentFixture<CanvasBlockRootArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CanvasBlockRootArrayComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockRootArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
