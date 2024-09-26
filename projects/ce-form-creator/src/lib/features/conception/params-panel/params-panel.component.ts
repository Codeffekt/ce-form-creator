import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormRootUpdateService } from '../../../core/services/form-root-update.service';
import { CreatorSelectionService } from '../../../core/services/selection.service';
import { CanvasForm } from '../../../core';

@Component({
  selector: 'ce-params-panel',
  templateUrl: './params-panel.component.html',
  styleUrls: ['./params-panel.component.scss']
})
export class ParamsPanelComponent implements OnInit {

  selection$: Observable<CanvasForm | undefined> = this.selectionService.selectionFormChanges();

  constructor(
    private formUpdaterService: FormRootUpdateService,
    private selectionService: CreatorSelectionService) { }

  ngOnInit(): void { }

  onFormChanged(form: CanvasForm) {
    this.formUpdaterService.update(form);
  }
}
