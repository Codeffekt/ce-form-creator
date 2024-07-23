import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockTextComponent } from './canvas-block-text.component';

describe('CanvasBlockTextComponent', () => {
  let component: CanvasBlockTextComponent;
  let fixture: ComponentFixture<CanvasBlockTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBlockTextComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
