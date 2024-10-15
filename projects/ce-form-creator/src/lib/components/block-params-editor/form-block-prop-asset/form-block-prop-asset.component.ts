import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { FormBlockEditComponentType } from '../../../core/models/FormBlockEdit';
import { FormCreatorContext } from '../../../core/models';
import { CommonModule } from '@angular/common';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { BlockSelectionDialogComponent, RootSelectionDialogComponent } from '../../dialogs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { filter, Subscription } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { CreatorFormsService } from '../../../core/services/forms.service';

@Component({
  selector: 'ce-form-block-prop-asset',
  standalone: true,
  imports: [
    CommonModule,
    CeLayoutModule,
    FormBlockCorePropEditComponent,
    BlockSelectionDialogComponent,
    RootSelectionDialogComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
  ],
  templateUrl: './form-block-prop-asset.component.html',
  styleUrls: ['./form-block-prop-asset.component.scss']
})
export class FormBlockPropAssetComponent implements FormBlockEditComponentType {

  @Input() context!: FormCreatorContext;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  private dialog = inject(MatDialog);
  private formBuilder = inject(UntypedFormBuilder);
  private formsService = inject(CreatorFormsService);
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

  ngOnInit(): void {
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

    const root = this.block?.root ? this.formsService.getFormRoot(this.block.root) : this.context.form.form;

    if(!root) {
      return;
    }

    const dialogRef = BlockSelectionDialogComponent.open(this.dialog, { root, type: "assetArray" });

    dialogRef.afterClosed().pipe(
      filter(block => block !== undefined)
    ).subscribe(block => {
      this.formGroup.patchValue({
        index: block.field
      });
    });
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      root: [this.block!.root],      
      index: [this.block!.index],
    });

    this.subscription = this.formGroup.valueChanges.subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      root: this.block!.root,        
      index: this.block!.index,  
    }, { emitEvent: false });
  }

  private onFormupdate() {
    this.block!.root = this.formGroup.value.root;
    this.block!.index = this.formGroup.value.index;      
    this.blockChanges.emit(this.context);
  }

  private get block() { return this.context.block };
}
