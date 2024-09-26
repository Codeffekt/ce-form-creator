import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockObjectComponent } from './canvas-block-object.component';

describe('CanvasBlockObjectComponent', () => {
  let component: CanvasBlockObjectComponent;
  let fixture: ComponentFixture<CanvasBlockObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CanvasBlockObjectComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
