import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { FormCreatorContext } from '../../../core/models';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DndDropEvent, DndModule } from 'ngx-drag-drop';
import { RootSelectionDialogComponent } from '../../dialogs/root-selection-dialog/root-selection-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CreatorFormsService } from '../../../core/services/forms.service';
import { DndFormService } from '../../../core/services/dnd-form.service';
import { FormBlockRoot, FormRoot } from '@codeffekt/ce-core-data';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'ce-form-block-prop-root',
  imports: [
    CommonModule,
    FormBlockCorePropEditComponent,
    CeLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    DndModule,
    RootSelectionDialogComponent,
  ],
  templateUrl: './form-block-prop-root.component.html',
  styleUrls: ['./form-block-prop-root.component.scss']
})
export class FormBlockPropRootComponent implements OnInit, OnDestroy {

  @Input() context!: FormCreatorContext<FormBlockRoot>;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  dndFormService = inject(DndFormService);

  private dialog = inject(MatDialog);
  private formsService = inject(CreatorFormsService);

  formGroup!: UntypedFormGroup;

  private subscription?: Subscription;

  constructor(private formBuilder: UntypedFormBuilder) {
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
        cat: root.id
      });
    });
  }

  onClear() {
    this.formGroup.patchValue({
      cat: undefined
    });
  }

  onDropElement(event: DndDropEvent) {
    const root = event.data as FormRoot;

    if (this.block?.cat === root.id) {
      return;
    }

    this.formGroup.patchValue({
      cat: root.id
    });
  }

  private createForm() {    
  
      this.formGroup = this.formBuilder.group({        
        cat: [this.block!.cat],
      });
  
      this.subscription = this.formGroup.valueChanges.subscribe(_ => this.onFormupdate());
    }
  
    private rebuildForm() {
      this.formGroup.patchValue({
        cat: this.block!.cat,        
      }, { emitEvent: false });
    }
  
    private onFormupdate() {
      this.block!.cat = this.formGroup.value.cat;      
      this.blockChanges.emit(this.context);
    }

  private get block() { return this.context.block };
}
