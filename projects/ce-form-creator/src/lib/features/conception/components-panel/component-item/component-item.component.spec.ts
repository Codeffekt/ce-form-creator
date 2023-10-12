import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeComponentItemComponent } from './component-item.component';

describe('ComponentItemComponent', () => {
  let component: CeComponentItemComponent;
  let fixture: ComponentFixture<CeComponentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeComponentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeComponentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
