import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormBlock } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CreatorSelectionService } from '../../../core/services';
import { CanvasForm } from '../../../core/models';


@UntilDestroy()
@Component({
  selector: 'ce-canvas-block',
  templateUrl: './canvas-block.component.html',
  styleUrls: ['./canvas-block.component.scss']
})
export class FormBlockEditComponent implements OnInit {

  @HostBinding('class.active')
  active = false

  @Input() form!: CanvasForm;
  @Input() formBlock!: FormBlock;
  @Input() link!: string;

  constructor(private selectionService: CreatorSelectionService) {
  }

  ngOnInit(): void {
    this.listenBlockSelection();
  }

  private listenBlockSelection() {
    this.selectionService.selectionChanges()
      .pipe(untilDestroyed(this))
      .subscribe(selection => this.active = CreatorSelectionService.isSelectionMatch(selection, this.form, this.formBlock));
  }
}
