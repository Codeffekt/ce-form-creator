import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlocksTreeNodeComponent } from './form-tree-node.component';

describe('FormBlocksTreeNodeComponent', () => {
  let component: FormBlocksTreeNodeComponent;
  let fixture: ComponentFixture<FormBlocksTreeNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBlocksTreeNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBlocksTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
