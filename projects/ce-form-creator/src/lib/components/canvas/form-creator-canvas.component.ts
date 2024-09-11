import { Component, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FormDragService } from '../../core/services/form-drag.service';
import { FormsCanvasService } from '../../core/services/forms-canvas.service';
import { FormsConnectorsService } from '../../core/services/forms-connectors.service';
import { CreatorFormsService } from '../../core/services/forms.service';

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
  formsService = inject(CreatorFormsService);
  elementRef = inject(ElementRef);    

  ngAfterViewInit() {    
    this.formsCanvasService.setCanvasRootElement(this.elementRef, this.forms);    
  }

  trackForm(index: number, form: FormRoot) {
    return form ? form.id : undefined;
  }

}
