import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsPanelComponent } from './params-panel.component';

describe('ParamsPanelComponent', () => {
  let component: ParamsPanelComponent;
  let fixture: ComponentFixture<ParamsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
