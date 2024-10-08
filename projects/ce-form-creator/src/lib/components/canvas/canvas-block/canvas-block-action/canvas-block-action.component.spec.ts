import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockActionComponent } from './canvas-block-action.component';

describe('CanvasBlockActionComponent', () => {
  let component: CanvasBlockActionComponent;
  let fixture: ComponentFixture<CanvasBlockActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CanvasBlockActionComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
