import { Component, EventEmitter, inject, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormCreatorContext } from '../../../core/models';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { FormBlockPropFieldsComponent } from '../form-block-prop-fields';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreatorFormsService } from '../../../core';
import { RootSelectionDialogComponent } from '../../dialogs/root-selection-dialog';
import { BlockSelectionDialogComponent } from '../../dialogs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormBlockCorePropEditComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    CeLayoutModule,
    FormBlockPropFieldsComponent,
    RootSelectionDialogComponent,
    BlockSelectionDialogComponent,
  ],
  selector: 'ce-form-block-prop-array',
  templateUrl: './form-block-prop-array.component.html',
  styleUrls: ['./form-block-prop-array.component.scss']
})
export class FormBlockPropArrayComponent implements OnInit, OnChanges, OnDestroy {
  @Input() context!: FormCreatorContext;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  private dialog = inject(MatDialog);
  private formsService = inject(CreatorFormsService);

  formGroup!: UntypedFormGroup;

  private subscription?: Subscription;

  constructor(
    private formBuilder: UntypedFormBuilder,
  ) {    
  }

  ngOnInit(): void {    
  }

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

    const dialogRef = BlockSelectionDialogComponent.open(this.dialog, { root, type: 'index' });

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
