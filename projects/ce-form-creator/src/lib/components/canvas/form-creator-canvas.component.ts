import { 
  Component, ElementRef, 
  EventEmitter, HostListener, 
  inject, Input, Output } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FormsCanvasService } from '../../core/services/forms-canvas.service';
import { CE_CANVAS_END_DRAGGING, CustomDragEvent } from '@codeffekt/ce-canvas-nodes';
import { CanvasForm } from '../../core/models';
import { IndexType } from '@codeffekt/ce-core-data';

@UntilDestroy()
@Component({
  selector: 'ce-form-creator-canvas',
  templateUrl: './form-creator-canvas.component.html',
  styleUrls: ['./form-creator-canvas.component.scss'],   
})
export class CeFormCreatorCanvasComponent {

  @Input() canvasForms!: CanvasForm[];  
  @Output() formChangedEvent: EventEmitter<CanvasForm> = new EventEmitter();
  
  private formsCanvasService = inject(FormsCanvasService);    
  private elementRef = inject(ElementRef);
  private pid!: IndexType;      

  @HostListener(`document:${CE_CANVAS_END_DRAGGING}`, ['$event'])
  onNodesMoved(evt: CustomEvent<CustomDragEvent>) {    
    this.formsCanvasService.onNodesMoved(evt.detail.elts, this.canvasForms);
  }

  ngAfterViewInit() {    
    this.formsCanvasService.setCanvasRootElement(this.elementRef);            
  }

  trackForm(index: number, canvasForm: CanvasForm) {    
    return canvasForm ? `${canvasForm.form.id}` : undefined;
  }  

}
