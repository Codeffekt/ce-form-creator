import { Component, EventEmitter, inject, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { FormCreatorContext } from '../../../core/models';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BlockSelectionDialogComponent } from '../../dialogs';
import { CreatorFormsService } from '../../../core/services/forms.service';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'ce-form-block-prop-action',
  standalone: true,
  imports: [
    CommonModule,
    FormBlockCorePropEditComponent,
    ReactiveFormsModule,
    CeLayoutModule,
    MatInputModule,
    MatDialogModule,    
    BlockSelectionDialogComponent,
  ],
  templateUrl: './form-block-prop-action.component.html',
  styleUrls: ['./form-block-prop-action.component.scss']
})
export class FormBlockPropActionComponent implements OnChanges, OnDestroy {

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

  onOpenSource() {
    const root = this.context.form.form;

    const dialogRef = BlockSelectionDialogComponent.open(this.dialog, { root, type: "index" });

    dialogRef.afterClosed().pipe(
      filter(block => block !== undefined)
    ).subscribe(block => {
      this.formGroup.patchValue({
        source: block.field,
      });
    });
  }

  private createForm() {    
    this.formGroup = this.formBuilder.group({
      source: [this.block!.params?.source]    
    });

    this.subscription = this.formGroup.valueChanges.subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      source: this.block!.params?.source,     
    }, { emitEvent: false });
  }

  private onFormupdate() {
    this.block!.params = {
      ...this.block?.params,
      source: this.formGroup.value.source,
    };   
    this.blockChanges.emit(this.context);
  }

  private get block() { return this.context.block };
}
