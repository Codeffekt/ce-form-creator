import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeComponentsPanel } from './components-panel.component';

describe('FormCreatorComponentsComponent', () => {
  let component: CeComponentsPanel;
  let fixture: ComponentFixture<CeComponentsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeComponentsPanel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeComponentsPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
