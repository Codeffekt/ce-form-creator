import { Component } from '@angular/core';
import { LOCAL_PROJECT } from '../library/project';
import { ProjectFormat } from '@codeffekt/ce-form-creator';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent {

  project = LOCAL_PROJECT;

  onSave(format: ProjectFormat) {
    console.log('onSave - forms editing');
  }

  onCancel() {
    console.log('onCancel - forms editing');
  }
}
