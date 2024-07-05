import { CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FormDragService } from '../../core/services/form-drag.service';


@UntilDestroy()
@Component({
  selector: 'ce-form-creator-canvas',
  templateUrl: './form-creator-canvas.component.html',
  styleUrls: ['./form-creator-canvas.component.scss']
})
export class CeFormCreatorCanvasComponent {

  @Input() forms!: FormRoot[];
  @Output() formChangedEvent: EventEmitter<FormRoot> = new EventEmitter();

  formDragService = inject(FormDragService);

  onDragMoved($event: CdkDragMove<any>) {
    this.formDragService.dragForm({ event: $event });
  }
}
