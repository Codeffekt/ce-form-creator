import { Component, Input } from '@angular/core';
import { FormRootUpdateService } from '../../../core/services/form-root-update.service';
import { CanvasForm } from '../../../core';

@Component({
  selector: 'ce-render-panel',
  templateUrl: './render-panel.component.html',
  styleUrls: ['./render-panel.component.scss'],
})
export class RenderPanelComponent {

  @Input() canvasForms: CanvasForm[] = [];  

  constructor(
    private formUpdaterService: FormRootUpdateService
  ) { }

  onFormChangedEvent($event: CanvasForm) {
    this.formUpdaterService.update($event);
  }  
}
