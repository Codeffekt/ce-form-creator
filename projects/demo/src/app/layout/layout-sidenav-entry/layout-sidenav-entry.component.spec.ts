import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSidenavEntryComponent } from './layout-sidenav-entry.component';

describe('LayoutSidenavEntryComponent', () => {
  let component: LayoutSidenavEntryComponent;
  let fixture: ComponentFixture<LayoutSidenavEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSidenavEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSidenavEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
