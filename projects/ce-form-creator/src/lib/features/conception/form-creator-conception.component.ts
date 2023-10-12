import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FormRootUpdateService } from '../../core/services/form-root-update.service';
import { CreatorSelectionService } from '../../core/services/selection.service';

@UntilDestroy()
@Component({
  selector: 'ce-form-creator-conception',
  templateUrl: './form-creator-conception.component.html',
  styleUrls: ['./form-creator-conception.component.scss'],
  providers: []
})
export class FormCreatorConceptionComponent implements OnInit {

  @Input() forms: FormRoot[] = [];

  @HostListener('document:keydown.delete', ['$event'])
  onDeleteComponent(event: KeyboardEvent) {
    const selection = this.selectionService.getCurrentSelection();
    if (selection?.form && selection?.block) {
      this.formUpdateService.deleteBlock(selection.form, selection.block, { emitEvent: true });
    }
  }

  constructor(
    private selectionService: CreatorSelectionService,
    private formUpdateService: FormRootUpdateService
  ) { }

  ngOnInit(): void { }
}
