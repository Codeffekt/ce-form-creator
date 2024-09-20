import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormRoot } from "@codeffekt/ce-core-data";
import { ProjectService } from '@codeffekt/ce-form-creator';
import { LOCAL_PROJECT } from '../library/project';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit, AfterViewInit {

  forms = [];

  constructor(private projectService: ProjectService) { }
  
  ngAfterViewInit(): void {
    setTimeout(() => this.projectService.initProject(LOCAL_PROJECT), 0);
  }

  ngOnInit(): void {    
  }

  onSave(forms: FormRoot[]) {
    console.log('onSave - forms editing');
  }

  onCancel() {
    console.log('onCancel - forms editing');
  }
}
