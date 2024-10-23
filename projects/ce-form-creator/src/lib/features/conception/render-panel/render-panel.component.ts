import { Component, inject, Input } from '@angular/core';
import { FormRootUpdateService } from '../../../core/services/form-root-update.service';
import { CanvasForm } from '../../../core/models';
import { FormsCanvasService } from '../../../core/services';
import { SingleRowAutoLayout, ZoomToFit } from '@codeffekt/ce-canvas-nodes';

@Component({
  selector: 'ce-render-panel',
  templateUrl: './render-panel.component.html',
  styleUrls: ['./render-panel.component.scss'],
})
export class RenderPanelComponent {

  @Input() canvasForms: CanvasForm[] = [];  

  private canvasService = inject(FormsCanvasService);

  constructor(
    private formUpdaterService: FormRootUpdateService
  ) { }

  onFormChangedEvent($event: CanvasForm) {
    this.formUpdaterService.update($event);
  }  

  onZoomFit() {    
    this.canvasService.getCanvas().applyAutoLayout(new ZoomToFit());    
  }
  
  onAutoLayout() {
    this.canvasService.getCanvas().applyAutoLayout(new SingleRowAutoLayout());
    this.canvasService.updateLayout();
  }
}
