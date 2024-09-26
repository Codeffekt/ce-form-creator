import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorInputComponent } from './creator-input.component';

describe('CreatorInputComponent', () => {
  let component: CreatorInputComponent;
  let fixture: ComponentFixture<CreatorInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreatorInputComponent]
    });
    fixture = TestBed.createComponent(CreatorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
