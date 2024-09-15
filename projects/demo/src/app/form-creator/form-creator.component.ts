import { Component, OnInit } from '@angular/core';
import { FormRoot } from "@codeffekt/ce-core-data";

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit {

  forms = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSave(forms: FormRoot[]) {
    console.log('onSave - forms editing');
  }

  onCancel() {
    console.log('onCancel - forms editing');
  }
}
