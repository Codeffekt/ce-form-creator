import { Component, EventEmitter, inject, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreatorContext } from '../../../core/models/Context';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BlockSelectionDialogComponent, RootSelectionDialogComponent } from '../../dialogs';
import { CreatorFormsService } from '../../../core/services/forms.service';
import { filter, Subscription } from 'rxjs';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CeLayoutModule } from '@codeffekt/ce-core';

@Component({
  selector: 'ce-form-block-prop-factory',
  standalone: true,
  imports: [
    CommonModule,
    FormBlockCorePropEditComponent,
    ReactiveFormsModule,
    CeLayoutModule,
    MatInputModule,
    MatDialogModule,
    RootSelectionDialogComponent,
  ],
  templateUrl: './form-block-prop-factory.component.html',
  styleUrls: ['./form-block-prop-factory.component.scss']
})
export class FormBlockPropFactoryComponent implements OnChanges, OnDestroy {
  
  @Input() context!: FormCreatorContext;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  private dialog = inject(MatDialog);
  private formsService = inject(CreatorFormsService);
  private formBuilder = inject(UntypedFormBuilder);
  private subscription?: Subscription;

  formGroup!: UntypedFormGroup;

  ngOnChanges(changes: SimpleChanges): void {    
    if (!this.formGroup) {
      this.createForm();
    } else {
      this.rebuildForm();
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onCoreBlockChange(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }

  onOpenSelection() {
    const roots = this.formsService.getForms();

    const dialogRef = RootSelectionDialogComponent.open(this.dialog, { roots });

    dialogRef.afterClosed().pipe(
      filter(root => root !== undefined)
    ).subscribe(root => {
      this.formGroup.patchValue({
        root: root.id,
        index: undefined,
      });
    });
  }

  onOpenIndex() {
    if(!this.block?.root) {
      return;
    }

    const root = this.formsService.getFormRoot(this.block.root);
    
    if(!root) {
      return;
    }

    const dialogRef = BlockSelectionDialogComponent.open(this.dialog, { root, type: "root" });

    dialogRef.afterClosed().pipe(
      filter(block => block !== undefined)
    ).subscribe(block => {
      this.formGroup.patchValue({
        index: block.field
      });
    });
  }

  onOpenTarget() {
    
    const root = this.context.form.form;

    const dialogRef = BlockSelectionDialogComponent.open(this.dialog, { root, type: "index" });

    dialogRef.afterClosed().pipe(
      filter(block => block !== undefined)
    ).subscribe(block => {
      this.formGroup.patchValue({
        target: block.field
      });
    });
  }

  private createForm() {    
    this.formGroup = this.formBuilder.group({
      root: [this.block!.root],      
      index: [this.block!.index],
      target: [this.block!.params?.target]
    });

    this.subscription = this.formGroup.valueChanges.subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      root: this.block!.root,    
      index: this.block!.index,  
      target: this.block!.params?.target,
    }, { emitEvent: false });
  }

  private onFormupdate() {
    this.block!.root = this.formGroup.value.root; 
    this.block!.index = this.formGroup.value.index; 
    this.block!.params = {
      ...this.block?.params,
      target: this.formGroup.value.target
    };       
    this.blockChanges.emit(this.context);
  }

  private get block() { return this.context.block };
}
