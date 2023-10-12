import { Component, ContentChild, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { FormBlock, FormRoot } from '@codeffekt/ce-core-data';
import { FormTreeInputType } from '../form-tree-input/form-tree-input.types';

type FormBlocksTreeNodeMode = 'view' | 'edit';

@Component({
  selector: 'ce-form-tree-node',
  templateUrl: './form-tree-node.component.html',
  styleUrls: ['./form-tree-node.component.scss'],
})
export class FormBlocksTreeNodeComponent {

  @Output() select = new EventEmitter();
  @Output() onLabelEdit = new EventEmitter<string>();

  @Input() label!: string;
  @Input() icon!: string;
  @Input() block?: FormBlock;
  @Input() form!: FormRoot;
  @Input() level = 0;
  @Input() expandable = false;
  @Input() expanded = false;
  @Input() type!: FormTreeInputType;
  @Input()
  @HostBinding('class.active') active!: boolean;

  @ContentChild(FormBlocksTreeNodeComponent) child?: FormBlocksTreeNodeComponent;
  @ViewChild(MatInput) set input(labelInput: MatInput) {
    labelInput?.focus();
  }

  mode: FormBlocksTreeNodeMode = 'view';

  constructor() { }


  onSelect() {
    this.select.next(this);
  }

  toggleExpand(event: MouseEvent) {
    event.stopPropagation();
    this.expanded = !this.expanded
  }

  expand() {
    this.expanded = true;
  }

  updateLabel(label: string) {
    this.onLabelEdit.next(label);
    this.onViewLabel();
  }

  onViewLabel() {
    this.setMode('view');
  }

  onEditLabel() {
    this.mode = 'edit';
  }

  private setMode(mode: FormBlocksTreeNodeMode) {
    this.mode = mode;
  }
}
