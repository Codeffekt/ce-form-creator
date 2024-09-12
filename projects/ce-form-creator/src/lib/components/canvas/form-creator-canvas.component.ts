import { Component, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FormsCanvasService } from '../../core/services/forms-canvas.service';

@UntilDestroy()
@Component({
  selector: 'ce-form-creator-canvas',
  templateUrl: './form-creator-canvas.component.html',
  styleUrls: ['./form-creator-canvas.component.scss'],  
})
export class CeFormCreatorCanvasComponent {

  @Input() forms!: FormRoot[];
  @Output() formChangedEvent: EventEmitter<FormRoot> = new EventEmitter();
  
  formsCanvasService = inject(FormsCanvasService);     
  elementRef = inject(ElementRef);    

  ngAfterViewInit() {    
    this.formsCanvasService.setCanvasRootElement(this.elementRef, this.forms);    
  }

  trackForm(index: number, form: FormRoot) {
    return form ? form.id : undefined;
  }

}
