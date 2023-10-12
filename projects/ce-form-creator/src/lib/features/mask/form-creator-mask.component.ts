import { Component, Input, OnInit } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';

@Component({
  selector: 'ce-form-creator-mask',
  templateUrl: './form-creator-mask.component.html',
  styleUrls: ['./form-creator-mask.component.scss'],
  providers: []
})
export class FormCreatorMaskComponent implements OnInit {

  @Input() forms!: FormRoot[];

  constructor() { }

  ngOnInit(): void {
  }

}
