import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeComponentsSectionComponent } from './components-section.component';

describe('ComponentsSectionComponent', () => {
  let component: CeComponentsSectionComponent;
  let fixture: ComponentFixture<CeComponentsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeComponentsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeComponentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
