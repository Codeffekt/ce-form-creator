import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutExampleViewerComponent } from './layout-example-viewer.component';

describe('LayoutExampleViewerComponent', () => {
  let component: LayoutExampleViewerComponent;
  let fixture: ComponentFixture<LayoutExampleViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutExampleViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutExampleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
