import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBlock, FormRoot } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DndDropEvent } from 'ngx-drag-drop';
import { Observable } from 'rxjs';
import { FormCreatorContext } from '../../../../core/models';
import { FormRootUpdateService } from '../../../../core/services/form-root-update.service';
import { CreatorSelectionService } from '../../../../core/services/selection.service';
import { FormBlocksTreeNodeComponent } from './form-tree-node/form-tree-node.component';

@UntilDestroy()
@Component({
  selector: 'ce-form-tree',
  templateUrl: './form-tree.component.html',
  styleUrls: ['./form-tree.component.scss']
})
export class FormBlocksTreeComponent implements OnInit {

  @Input() form!: FormRoot;

  selection$: Observable<FormCreatorContext | undefined> = this.selectionService.selectionChanges();

  @ViewChild(FormBlocksTreeNodeComponent) formNode!: FormBlocksTreeNodeComponent;

  constructor(
    private formUpdateService: FormRootUpdateService,
    private selectionService: CreatorSelectionService
  ) { }

  ngOnInit(): void {
    this.listenSelectionChanges();
  }

  selectForm(form: FormRoot) {
    this.selectionService.selectForm(form);
  }

  selectBlock(form: FormRoot, block: FormBlock) {
    this.selectionService.selectBlock(form, block);
  }

  onFormIdEdit(form: FormRoot, id: string) {
    form.id = id;
    this.formUpdateService.update(form);
  }

  onBlockFieldEdit(form: FormRoot, block: FormBlock, field: string) {
    // quand on change le field du block il faut aussi mettre à jour
    // le content du FormRoot et mettre à jour la clef qui pointe vers ce block
    // TODO: create an utility function in ce-core-data
    const formContentBlockKeys = Object.keys(form.content);
    let newFormContent = {};
    for(const key of formContentBlockKeys) {
      if(key !== block.field) {
        newFormContent = {
          ...newFormContent,
          [key]: form.content[key]
        }
      }
    }
    block.field = field;
    newFormContent = {
      ...newFormContent,
      [field]: block
    };
    form.content = newFormContent;
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
        if (selection?.form.id === this.form.id && selection?.block) {
          this.formNode.expand();
        }
      });
  }
}
