import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectParamsEditorComponent } from './project-params-editor.component';

describe('ProjectParamsEditorComponent', () => {
  let component: ProjectParamsEditorComponent;
  let fixture: ComponentFixture<ProjectParamsEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProjectParamsEditorComponent]
    });
    fixture = TestBed.createComponent(ProjectParamsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
