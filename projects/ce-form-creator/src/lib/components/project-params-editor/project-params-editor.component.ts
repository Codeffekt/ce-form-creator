import {
  Component, EventEmitter,
  inject, Input, OnChanges,
  OnDestroy, Output, SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFormatContext } from '../../project';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreatorFormsService } from '../../core/services/forms.service';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { filter, Subscription } from 'rxjs';
import { RootSelectionDialogComponent } from '../dialogs/root-selection-dialog/root-selection-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CeLayoutModule } from '@codeffekt/ce-core';

@Component({
  selector: 'ce-project-params-editor',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    CeLayoutModule,
    RootSelectionDialogComponent,
  ],
  templateUrl: './project-params-editor.component.html',
  styleUrls: ['./project-params-editor.component.scss']
})
export class ProjectParamsEditorComponent implements OnChanges, OnDestroy {

  @Input() projectContext!: ProjectFormatContext;
  @Output() projectContextChanges: EventEmitter<ProjectFormatContext> = new EventEmitter();

  formGroup!: UntypedFormGroup;

  private subscription?: Subscription;
  private dialog = inject(MatDialog);
  private formsService = inject(CreatorFormsService);

  constructor(
    private formBuilder: UntypedFormBuilder,
  ) {
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

  onOpenSelection() {
    const roots = this.formsService.getForms();

    const dialogRef = RootSelectionDialogComponent.open(this.dialog, { roots });

    dialogRef.afterClosed().pipe(
      filter(root => root !== undefined)
    ).subscribe(root => {
      this.formGroup.patchValue({
        entryPoint: root.id,
      });
    });
  }

  private createForm() {    
    this.formGroup = this.formBuilder.group({
      entryPoint: [this.context.entryPoint]
    });

    this.subscription = this.formGroup.valueChanges.subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      entryPoint: this.context!.entryPoint,          
    }, { emitEvent: false });
  }

  private onFormupdate() {
    this.context.entryPoint = this.formGroup.value.entryPoint;    
    this.projectContextChanges.emit(this.context);
  }

  private get context() { return this.projectContext };
}
