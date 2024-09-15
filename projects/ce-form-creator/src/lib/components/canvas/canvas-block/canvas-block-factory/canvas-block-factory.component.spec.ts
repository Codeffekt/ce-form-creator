import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockFactoryComponent } from './canvas-block-factory.component';

describe('CanvasBlockFactoryComponent', () => {
  let component: CanvasBlockFactoryComponent;
  let fixture: ComponentFixture<CanvasBlockFactoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBlockFactoryComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
