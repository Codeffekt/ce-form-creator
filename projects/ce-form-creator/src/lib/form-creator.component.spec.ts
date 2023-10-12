import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeFormCreatorComponent } from './form-creator.component';

describe('FormCreatorComponent', () => {
  let component: CeFormCreatorComponent;
  let fixture: ComponentFixture<CeFormCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeFormCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeFormCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
