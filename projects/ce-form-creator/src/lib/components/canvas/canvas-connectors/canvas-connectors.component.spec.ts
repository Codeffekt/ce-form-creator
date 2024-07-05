import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasConnectorsComponent } from './canvas-connectors.component';

describe('CanvasConnectorsComponent', () => {
  let component: CanvasConnectorsComponent;
  let fixture: ComponentFixture<CanvasConnectorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasConnectorsComponent]
    });
    fixture = TestBed.createComponent(CanvasConnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
