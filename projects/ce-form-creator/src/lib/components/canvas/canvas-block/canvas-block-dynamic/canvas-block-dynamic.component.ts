import { AfterViewInit, Component, ComponentRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { FORM_BLOCK_TYPE_TEXT, FormBlock, FormRoot } from '@codeffekt/ce-core-data';
import { CanvasBlockComponentType, CanvasBlockStoreService } from '../../../../core';

@Component({
  selector: 'ce-canvas-block-dynamic',
  templateUrl: './canvas-block-dynamic.component.html',
  styleUrls: ['./canvas-block-dynamic.component.scss']
})
export class CanvasBlockDynamicComponent implements AfterViewInit {

  @Input() formInstance!: FormRoot;
  @Input() formBlock!: FormBlock;  

  @ViewChild('container', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  private blockComponent!: ComponentRef<CanvasBlockComponentType>;

  constructor(
    private storeService: CanvasBlockStoreService
  ) {
  }  

  ngAfterViewInit(): void {
    this.updateComponent();
  }

  private updateComponent() {

    if (!this.vcr) {
      throw new Error(`UpdateComponent must be called when ViewContainerRef is defined`);
    }    

    if (this.blockComponent) {
      this.vcr.remove();
    }

    const componentType = this.storeService.getComponentType(this.formBlock?.type ?? FORM_BLOCK_TYPE_TEXT);
    this.blockComponent = this.vcr.createComponent(componentType);
    this.connectInput();    
    this.blockComponent.changeDetectorRef.detectChanges();
  }

  private connectInput() {    
    this.blockComponent.setInput("formInstance", this.formInstance);
    this.blockComponent.setInput("formBlock", this.formBlock);
  }  
}
