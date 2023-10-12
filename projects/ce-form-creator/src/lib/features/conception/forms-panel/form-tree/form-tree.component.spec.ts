import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlocksTreeComponent } from './form-tree.component';

describe('FormBlocksTreeComponent', () => {
  let component: FormBlocksTreeComponent;
  let fixture: ComponentFixture<FormBlocksTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBlocksTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBlocksTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
