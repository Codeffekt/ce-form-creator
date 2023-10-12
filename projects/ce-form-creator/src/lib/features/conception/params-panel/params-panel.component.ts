import { Component, OnInit } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { FormRootUpdateService } from '../../../core/services/form-root-update.service';
import { CreatorSelectionService } from '../../../core/services/selection.service';

@Component({
  selector: 'ce-params-panel',
  templateUrl: './params-panel.component.html',
  styleUrls: ['./params-panel.component.scss']
})
export class ParamsPanelComponent implements OnInit {

  selection$: Observable<FormRoot | undefined> = this.selectionService.selectionFormChanges();

  constructor(
    private formUpdaterService: FormRootUpdateService,
    private selectionService: CreatorSelectionService) { }

  ngOnInit(): void { }

  onFormChanged(form: FormRoot) {
    this.formUpdaterService.update(form);
  }
}
