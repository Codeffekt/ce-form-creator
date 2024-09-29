import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreatorContext } from '../../../core/models';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ce-form-block-prop-unknown',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './form-block-prop-unknown.component.html',
  styleUrls: ['./form-block-prop-unknown.component.scss']
})
export class FormBlockPropUnknownComponent {

  @Input() context!: FormCreatorContext;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {    
  }  

  onCoreBlockChange(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }

}
