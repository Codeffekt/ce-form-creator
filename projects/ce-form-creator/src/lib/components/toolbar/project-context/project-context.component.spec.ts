import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContextComponent } from './project-context.component';

describe('ProjectContextComponent', () => {
  let component: ProjectContextComponent;
  let fixture: ComponentFixture<ProjectContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectContextComponent]
    });
    fixture = TestBed.createComponent(ProjectContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
