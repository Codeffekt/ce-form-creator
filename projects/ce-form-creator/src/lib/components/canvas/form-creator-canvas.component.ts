import {
  Component, ElementRef,
  EventEmitter, HostListener,
  inject, Input, OnInit, Output
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormsCanvasService } from '../../core/services/forms-canvas.service';
import { CE_CANVAS_END_DRAGGING, CustomDragEvent } from '@codeffekt/ce-canvas-nodes';
import { CanvasForm } from '../../core/models';
import { IndexType } from '@codeffekt/ce-core-data';
import { CreatorSelectionService } from '../../core/services/selection.service';

@UntilDestroy()
@Component({
  selector: 'ce-form-creator-canvas',
  templateUrl: './form-creator-canvas.component.html',
  styleUrls: ['./form-creator-canvas.component.scss'],
  standalone: false
})
export class CeFormCreatorCanvasComponent implements OnInit {

  @Input() canvasForms!: CanvasForm[];
  @Output() formChangedEvent: EventEmitter<CanvasForm> = new EventEmitter();

  private formsCanvasService = inject(FormsCanvasService);
  private elementRef = inject(ElementRef);
  private selectionService = inject(CreatorSelectionService);
  private pid!: IndexType;
  
  public activeForm?: CanvasForm;

  @HostListener(`document:${CE_CANVAS_END_DRAGGING}`, ['$event'])
  onNodesMoved(evt: CustomEvent<CustomDragEvent>) {
    this.formsCanvasService.onNodesMoved(evt.detail.elts, this.canvasForms);
  }

  ngOnInit(): void {
    this.listenSelectionChanges();
  }

  ngAfterViewInit() {
    this.formsCanvasService.setCanvasRootElement(this.elementRef);
  }

  trackForm(index: number, canvasForm: CanvasForm) {
    return canvasForm ? `${canvasForm.form.id}` : undefined;
  }

  private listenSelectionChanges() {
    this.selectionService.selectionChanges()
      .pipe(untilDestroyed(this))
      .subscribe(selection => {
        this.activeForm = selection?.form;
      });
  }
}
