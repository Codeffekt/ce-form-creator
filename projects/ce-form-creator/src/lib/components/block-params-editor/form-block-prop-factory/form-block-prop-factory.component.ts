import {
  AfterViewInit, Component,
  ComponentRef, EventEmitter,
  Input, OnChanges,
  Output, SimpleChanges,
  ViewChild, ViewContainerRef
} from '@angular/core';
import { FORM_BLOCK_TYPE_TEXT } from '@codeffekt/ce-core-data';
import { FormCreatorContext } from '../../../core/models';
import { FormBlockEditComponentType } from '../../../core/models/FormBlockEdit';
import { FormBlockEditStoreService } from '../../../core/services/form-block-edit-store.service';

@Component({
  selector: 'ce-form-block-prop-factory',
  templateUrl: './form-block-prop-factory.component.html',
  styleUrls: ['./form-block-prop-factory.component.scss']
})
export class FormBlockPropFactoryComponent implements OnChanges, AfterViewInit {

  @Input() context!: FormCreatorContext;

  @Output() blockChangedEvent = new EventEmitter<FormCreatorContext>();

  @ViewChild('container', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  private blockComponent!: ComponentRef<FormBlockEditComponentType>;

  constructor(
    private storeService: FormBlockEditStoreService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['context']?.isFirstChange()) {
      this.updateComponent();
    }
  }

  ngAfterViewInit(): void {
    this.updateComponent();
  }

  private updateComponent() {

    if (!this.vcr) {
      throw new Error(`UpdateComponent must be called when ViewContainerRef is defined`);
    }

    if (!this.context) {
      throw new Error(`Cannot create a block edit component with undefined block input`);
    }

    if (this.blockComponent) {
      this.vcr.remove();
    }

    const componentType = this.storeService.getComponentType(this.context.block?.type ?? FORM_BLOCK_TYPE_TEXT);
    this.blockComponent = this.vcr.createComponent(componentType);
    this.connectInput();
    this.connectOutput(this.blockComponent.instance);
    this.blockComponent.changeDetectorRef.detectChanges();
  }

  private connectInput() {
    this.blockComponent.setInput("context", this.context);
  }

  private connectOutput(component: FormBlockEditComponentType) {
    if (component.blockChanges) {
      component.blockChanges.subscribe(
        (value) => this.blockChangedEvent.next(value),
        (error) => this.blockChangedEvent.error(error),
        () => this.blockChangedEvent.complete()
      );
    }
  }
}
