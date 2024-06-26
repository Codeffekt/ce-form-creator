import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockAssocComponent } from './canvas-block-assoc.component';

describe('CanvasBlockAssocComponent', () => {
  let component: CanvasBlockAssocComponent;
  let fixture: ComponentFixture<CanvasBlockAssocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBlockAssocComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockAssocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
