import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { UntilDestroy } from '@ngneat/until-destroy';


@UntilDestroy()
@Component({
  selector: 'ce-form-creator-canvas',
  templateUrl: './form-creator-canvas.component.html',
  styleUrls: ['./form-creator-canvas.component.scss']
})
export class CeFormCreatorCanvasComponent {
  @Input() forms!: FormRoot[];
  @Output() formChangedEvent: EventEmitter<FormRoot> = new EventEmitter();
}
