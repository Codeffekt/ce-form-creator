import { AfterViewInit, Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { FormDragService } from '../../../core/services/form-drag.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormsCanvasService } from '../../../core/services/forms-canvas.service';
import { FormsConnectorsService } from '../../../core/services/forms-connectors.service';
import { FormCanvasElt } from '../../../core/models/FormCanvasElt';
import { FormDragEvent } from '../../../core/models/FormDragEvent';

@UntilDestroy()
@Component({
  selector: 'ce-canvas-connectors',
  templateUrl: './canvas-connectors.component.html',
  styleUrls: ['./canvas-connectors.component.scss'],  
})
export class CanvasConnectorsComponent implements AfterViewInit {
  
  @Input() forms!: FormRoot[];
  @ViewChild('svg', {static: true}) connectors!: ElementRef<SVGElement>;

  formDragService = inject(FormDragService);
  formsCanvasService = inject(FormsCanvasService);
  formsConnectors = inject(FormsConnectorsService);

  ngAfterViewInit(): void {
    /* console.log(this.connectors);
    this.formsConnectors.setRootElement(this.connectors);
    
    this.formDragService.dragChanges().pipe(
      untilDestroyed(this)
    ).subscribe(evt => this.onFormDragged(evt));
    this.formsCanvasService.formsCanvasChanges().pipe(
      untilDestroyed(this)
    ).subscribe(elts => this.updateConnectors(elts)); */
  }
  
}
