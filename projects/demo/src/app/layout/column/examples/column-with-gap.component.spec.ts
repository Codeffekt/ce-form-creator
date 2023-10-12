import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnWithGapComponent } from './column-with-gap.component';

describe('ColumnWithGapComponent', () => {
  let component: ColumnWithGapComponent;
  let fixture: ComponentFixture<ColumnWithGapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnWithGapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnWithGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
