import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorModeSwitcherComponent } from './creator-mode-switcher.component';

describe('CreatorModeSwitcherComponent', () => {
  let component: CreatorModeSwitcherComponent;
  let fixture: ComponentFixture<CreatorModeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorModeSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorModeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
