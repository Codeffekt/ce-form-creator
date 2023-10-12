import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatorConceptionComponent } from './form-creator-conception.component';

describe('FormCreatorConceptionComponent', () => {
  let component: FormCreatorConceptionComponent;
  let fixture: ComponentFixture<FormCreatorConceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreatorConceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreatorConceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
