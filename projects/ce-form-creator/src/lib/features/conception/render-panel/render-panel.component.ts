import { Component, Input } from '@angular/core';
import { FormInstanceBase, FormRoot } from '@codeffekt/ce-core-data';
import { FormRootUpdateService } from '../../../core/services/form-root-update.service';

@Component({
  selector: 'ce-render-panel',
  templateUrl: './render-panel.component.html',
  styleUrls: ['./render-panel.component.scss'],
})
export class RenderPanelComponent {

  @Input() forms: FormRoot[] = [];

  constructor(
    private formUpdaterService: FormRootUpdateService
  ) { }

  onFormChangedEvent($event: FormInstanceBase) {
    this.formUpdaterService.update($event);
  }  
}
