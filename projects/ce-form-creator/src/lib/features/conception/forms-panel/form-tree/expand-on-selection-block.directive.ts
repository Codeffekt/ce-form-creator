import { Directive, Input } from '@angular/core';
import { FormBlocksTreeNodeComponent } from './form-tree-node/form-tree-node.component';
import { FormCreatorContext } from '../../../../core/models/Context';
@Directive({
    standalone: true,
    selector: '[expandOnSelectionBlock]',
})
export class ExpandOnSelectionBlockDirective {

    @Input() expandOnSelectionBlock!: FormCreatorContext;

    constructor(private el: FormBlocksTreeNodeComponent) {        
    }
}
