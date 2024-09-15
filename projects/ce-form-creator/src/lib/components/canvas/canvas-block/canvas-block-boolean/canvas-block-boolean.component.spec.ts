import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockBooleanComponent } from './canvas-block-boolean.component';

describe('CanvasBlockBooleanComponent', () => {
  let component: CanvasBlockBooleanComponent;
  let fixture: ComponentFixture<CanvasBlockBooleanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBlockBooleanComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
