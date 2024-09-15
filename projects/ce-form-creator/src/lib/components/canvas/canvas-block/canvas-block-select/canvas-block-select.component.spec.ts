import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockSelectComponent } from './canvas-block-select.component';

describe('CanvasBlockSelectComponent', () => {
  let component: CanvasBlockSelectComponent;
  let fixture: ComponentFixture<CanvasBlockSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBlockSelectComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
