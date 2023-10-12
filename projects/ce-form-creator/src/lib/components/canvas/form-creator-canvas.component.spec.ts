import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeFormCreatorCanvasComponent } from './form-creator-canvas.component';

describe('FormCreatorCanvasComponent', () => {
  let component: CeFormCreatorCanvasComponent;
  let fixture: ComponentFixture<CeFormCreatorCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeFormCreatorCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeFormCreatorCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
