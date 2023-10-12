import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatorHistoryItemComponent } from './form-creator-history-item.component';

describe('FormCreatorHistoryItemComponent', () => {
  let component: FormCreatorHistoryItemComponent;
  let fixture: ComponentFixture<FormCreatorHistoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreatorHistoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreatorHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
