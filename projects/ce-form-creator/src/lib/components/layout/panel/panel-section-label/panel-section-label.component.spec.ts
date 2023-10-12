import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSectionLabelComponent } from './panel-section-label.component';

describe('PanelSectionLabelComponent', () => {
  let component: PanelSectionLabelComponent;
  let fixture: ComponentFixture<PanelSectionLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSectionLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSectionLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
