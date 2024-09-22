import { Component, HostListener, inject, Input, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FormRootUpdateService } from '../../core/services/form-root-update.service';
import { CreatorSelectionService } from '../../core/services/selection.service';
import { CanvasForm, FormsCanvasService } from '../../core';
import { SingleRowAutoLayout, ZoomToFit } from '@codeffekt/ce-canvas-nodes';

@UntilDestroy()
@Component({
  selector: 'ce-form-creator-conception',
  templateUrl: './form-creator-conception.component.html',
  styleUrls: ['./form-creator-conception.component.scss'],
  providers: []
})
export class FormCreatorConceptionComponent implements OnInit {

  @Input() canvasForms: CanvasForm[] = [];  

  @HostListener('document:keydown.delete', ['$event'])
  onDeleteComponent(event: KeyboardEvent) {
    const selection = this.selectionService.getCurrentSelection();
    if (selection?.form && selection?.block) {      
      this.formUpdateService.deleteBlock(selection.form.form.id, selection.block.field, { emitEvent: true });
    } else if(selection?.form) {
      this.formUpdateService.deleteForm(selection.form.form.id);
    }
  }

  private canvasService = inject(FormsCanvasService);

  constructor(
    private selectionService: CreatorSelectionService,
    private formUpdateService: FormRootUpdateService,    
  ) {     
  }

  ngOnInit(): void { }  

  onZoomFit() {    
    this.canvasService.getCanvas().applyAutoLayout(new ZoomToFit());    
  }
  
  onAutoLayout() {
    this.canvasService.getCanvas().applyAutoLayout(new SingleRowAutoLayout());
    this.canvasService.updateLayout();
  }
  
}
