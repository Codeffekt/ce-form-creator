import { Component, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FormDragService } from '../../core/services/form-drag.service';
import { FormsCanvasService } from '../../core/services/forms-canvas.service';
import { FormsConnectorsService } from '../../core/services/forms-connectors.service';


@UntilDestroy()
@Component({
  selector: 'ce-form-creator-canvas',
  templateUrl: './form-creator-canvas.component.html',
  styleUrls: ['./form-creator-canvas.component.scss'],
  providers: [
    FormsConnectorsService
  ]
})
export class CeFormCreatorCanvasComponent {

  @Input() forms!: FormRoot[];
  @Output() formChangedEvent: EventEmitter<FormRoot> = new EventEmitter();

  formDragService = inject(FormDragService);
  formsCanvasService = inject(FormsCanvasService);  
  formsConnectors = inject(FormsConnectorsService);
  elementRef = inject(ElementRef);

  ngAfterViewInit() {
    //this.formsConnectors.updateConnectors(this.formsCanvasService.getElts());
    this.formsCanvasService.setCanvasRootElement(this.elementRef, this.forms);
    this.formsConnectors.updateConnectors();
  }
}
