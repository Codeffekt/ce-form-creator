import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: CeContainerComponent;
  let fixture: ComponentFixture<CeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
