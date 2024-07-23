import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockAssetComponent } from './canvas-block-asset.component';

describe('CanvasBlockAssetComponent', () => {
  let component: CanvasBlockAssetComponent;
  let fixture: ComponentFixture<CanvasBlockAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBlockAssetComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
