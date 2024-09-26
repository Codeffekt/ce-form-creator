import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBlockAssetArrayComponent } from './canvas-block-asset-array.component';

describe('CanvasBlockAssetArrayComponent', () => {
  let component: CanvasBlockAssetArrayComponent;
  let fixture: ComponentFixture<CanvasBlockAssetArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CanvasBlockAssetArrayComponent]
    });
    fixture = TestBed.createComponent(CanvasBlockAssetArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
