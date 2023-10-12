import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FormCreatorContext } from '../../core/models';
import { CreatorSelectionService } from '../../core/services/selection.service';

@Component({
  selector: 'ce-form-block-prop-edit',
  templateUrl: './form-block-prop-edit.component.html',
  styleUrls: ['./form-block-prop-edit.component.scss']
})
export class FormBlockPropEditComponent {

  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  context$: Observable<FormCreatorContext | undefined> = this.selectionService.blockSelectionChanges();

  constructor(private selectionService: CreatorSelectionService) { }

  onBlockChanged(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }
}
