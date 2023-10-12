import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatorRenderComponent } from './form-creator-render.component';

describe('FormCreatorRenderComponent', () => {
  let component: FormCreatorRenderComponent;
  let fixture: ComponentFixture<FormCreatorRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreatorRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreatorRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
