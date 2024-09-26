import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { FormBlock, FormUtils } from '@codeffekt/ce-core-data';
import { DndDropEvent } from 'ngx-drag-drop';
import { Observable } from 'rxjs';
import { CanvasForm, FormCreatorContext } from '../../../../core/models';
import { FormRootUpdateService } from '../../../../core/services/form-root-update.service';
import { CreatorSelectionService } from '../../../../core/services/selection.service';
import { FormBlocksTreeNodeComponent } from './form-tree-node/form-tree-node.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ce-form-tree',
  templateUrl: './form-tree.component.html',
  styleUrls: ['./form-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBlocksTreeComponent implements AfterViewInit {

  @Input() form!: CanvasForm;

  selection$: Observable<FormCreatorContext | undefined> = this.selectionService.selectionChanges();

  @ViewChild(FormBlocksTreeNodeComponent) formNode!: FormBlocksTreeNodeComponent;

  constructor(
    private formUpdateService: FormRootUpdateService,
    private selectionService: CreatorSelectionService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngAfterViewInit(): void {
    this.listenSelectionChanges();
  }

  selectForm(form: CanvasForm) {
    this.selectionService.selectForm(form);
  }

  selectBlock(form: CanvasForm, block: FormBlock) {
    this.selectionService.selectBlock(form, block);
  }

  onFormIdEdit(form: CanvasForm, id: string) {
    form.form.id = id;
    this.formUpdateService.update(form);
  }

  trackBlock(index: number, block: FormBlock) {
    return block ? block.field : undefined;
  }

  onBlockFieldEdit(form: CanvasForm, block: FormBlock, field: string) {

    const blocks = FormUtils.getBlocks(form.form).map(b => ({ ...b }));
    const blockIndex = blocks.findIndex(b => b.field === block.field);

    blocks[blockIndex] = {
      ...block,
      field,
    };

    const newFormContent = blocks.reduce((prev, cur) => ({
      ...prev,
      [cur.field]: cur
    }), {});
    
    form.form.content = newFormContent;
    this.formUpdateService.update(form);
  }

  async onDropElement(event: DndDropEvent) {
    const res = this.formUpdateService
      .addNewBlock(this.form, event.data, { emitEvent: true });
    this.form = res.form;
    this.selectionService.selectBlock(this.form, res.block);
  }

  private listenSelectionChanges() {
    this.selectionService.selectionChanges()
      .pipe(untilDestroyed(this))
      .subscribe(selection => {
        if (selection?.form.form.id === this.form.form.id && selection?.block) {
          this.formNode.expand();
          this.cdr.detectChanges();
        }
      });
  }
}
