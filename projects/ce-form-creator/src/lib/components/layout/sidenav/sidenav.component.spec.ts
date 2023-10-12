import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeSidenavContainerComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: CeSidenavContainerComponent;
  let fixture: ComponentFixture<CeSidenavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeSidenavContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeSidenavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
