import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeFormCreatorToolbarComponent } from './form-creator-toolbar.component';

describe('FormCreatorToolbarComponent', () => {
  let component: CeFormCreatorToolbarComponent;
  let fixture: ComponentFixture<CeFormCreatorToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeFormCreatorToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeFormCreatorToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
