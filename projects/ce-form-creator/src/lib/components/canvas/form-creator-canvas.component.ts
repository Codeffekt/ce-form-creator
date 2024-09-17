import { Component, ElementRef, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FormsCanvasService } from '../../core/services/forms-canvas.service';
import { filter } from 'rxjs';
import { CE_CANVAS_END_DRAGGING, CustomDragEvent, ImportLayout } from '@codeffekt/ce-canvas-nodes';
import { CanvasForm } from '../../core/models';

@UntilDestroy()
@Component({
  selector: 'ce-form-creator-canvas',
  templateUrl: './form-creator-canvas.component.html',
  styleUrls: ['./form-creator-canvas.component.scss'],  
})
export class CeFormCreatorCanvasComponent {

  @Input() canvasForms!: CanvasForm[];  
  @Output() formChangedEvent: EventEmitter<CanvasForm> = new EventEmitter();
  
  formsCanvasService = inject(FormsCanvasService);    
  elementRef = inject(ElementRef);    

  @HostListener(`document:${CE_CANVAS_END_DRAGGING}`, ['$event'])
  onNodesMoved(evt: CustomEvent<CustomDragEvent>) {
    this.formsCanvasService.onNodesMoved(evt.detail.elts, this.canvasForms);
  }

  ngAfterViewInit() {    
    this.formsCanvasService.setCanvasRootElement(this.elementRef);    
    // this.listenLayoutChanges();
  }

  trackForm(index: number, canvasForm: CanvasForm) {
    return canvasForm ? canvasForm.form.id : undefined;
  }

  // private listenLayoutChanges() {
  //   this.formsCanvasService.layoutChanges()?.pipe(
  //       filter(layout => layout !== undefined)
  //     )
  //     .subscribe(layout => {
  //     console.log(layout);
  //     this.formsCanvasService.getCanvas().applyAutoLayout(
  //       new ImportLayout(layout), { doNotRaiseEvents: true }
  //     );
  //   })
  // }

}
