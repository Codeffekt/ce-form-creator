import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnOverflowComponent } from './column-overflow.component';

describe('ColumnOverflowComponent', () => {
  let component: ColumnOverflowComponent;
  let fixture: ComponentFixture<ColumnOverflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnOverflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnOverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
