import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSectionContentComponent } from './panel-section-content.component';

describe('PanelSectionContentComponent', () => {
  let component: PanelSectionContentComponent;
  let fixture: ComponentFixture<PanelSectionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSectionContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
