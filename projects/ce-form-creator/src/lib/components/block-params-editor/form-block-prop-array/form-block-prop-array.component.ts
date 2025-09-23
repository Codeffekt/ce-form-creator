import { Component, EventEmitter, inject, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBlockArray, FormQuery, FormRoot } from "@codeffekt/ce-core-data";
import { FormCreatorContext } from '../../../core/models';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CeLayoutModule, FiltersLabelComponent, FormQueryLogicBuilder } from '@codeffekt/ce-core';
import { FormBlockPropFieldsComponent } from '../form-block-prop-fields';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CoreUtils, CreatorFormsService, DndFormService } from '../../../core';
import { RootSelectionDialogComponent } from '../../dialogs/root-selection-dialog';
import { BlockSelectionDialogComponent } from '../../dialogs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DndDropEvent, DndModule } from 'ngx-drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FiltersDialogComponent } from '../../dialogs/filters-dialog/filters-dialog.component';

@Component({
  imports: [
    CommonModule,
    FormBlockCorePropEditComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    CeLayoutModule,
    DndModule,
    FormBlockPropFieldsComponent,
    FiltersLabelComponent,
],
  selector: 'ce-form-block-prop-array',
  templateUrl: './form-block-prop-array.component.html',
  styleUrls: ['./form-block-prop-array.component.scss']
})
export class FormBlockPropArrayComponent implements OnInit, OnChanges, OnDestroy {
  @Input() context!: FormCreatorContext<FormBlockArray>;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  dndFormService = inject(DndFormService);

  formRoot?: FormRoot;
  filter?: string;

  private dialog = inject(MatDialog);
  private formsService = inject(CreatorFormsService);
  private logicBuilder = new FormQueryLogicBuilder();

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
    this.updateFilter();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onCoreBlockChange(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }

  onOpenRoot() {
    const roots = this.formsService.getForms();

    const dialogRef = RootSelectionDialogComponent.open(this.dialog, { roots });

    dialogRef.afterClosed().pipe(
      filter(root => root !== undefined)
    ).subscribe(root => {
      this.formGroup.patchValue({
        root: root.id,
        index: undefined,
        filter: undefined,
      });

      this.logicBuilder.setModel(root);
    });
  }

  onRootClear() {
    this.formGroup.patchValue({
      root: undefined,
      index: undefined,
      filter: undefined,
    });
  }

  onDropElement(event: DndDropEvent) {
    const root = event.data as FormRoot;

    if (this.block?.root === root.id) {
      return;
    }

    this.formGroup.patchValue({
      root: root.id,
      index: undefined,
      filter: undefined,
    });
  }

  onOpenIndex() {
    if (!this.block?.root) {
      return;
    }

    const root = this.formsService.getFormRoot(this.block.root);

    if (!root) {
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

  onOpenFilter() {
    if (!this.block?.root) {
      return;
    }

    const root = this.formsService.getFormRoot(this.block.root);

    if (!root) {
      return;
    }

    const dialogRef = FiltersDialogComponent.open(this.dialog, {
      root,
      query: this.block.params?.query,
    });

    dialogRef.afterClosed().pipe(
      filter(res => res !== undefined)
    ).subscribe(res => {      
      this.formGroup.patchValue({
        filter: res.query ? this.logicBuilder.toFilter(res.query) : undefined,
      });
    });

  }

  onFilterClear() {
    this.formGroup.patchValue({
      filter: undefined,
    });
  }

  private updateFilter() {
    console.log("UpdateFilter");
    this.filter = this.retrieveFilterFromParams();
    this.formRoot = this.block?.root ? this.formsService.getFormRoot(this.block.root) : undefined;
  }

  private retrieveFilterFromParams() {
    const query = CoreUtils.getBlockParamsObjectValue<FormQuery>(this.block, "query");
    return query?.queryFields ? this.logicBuilder.toFilter(query?.queryFields) : undefined;
  }

  private retrieveQueryFromFilter(): FormQuery | undefined {
    const queryFieldLogic = this.logicBuilder.fromFilter(this.formGroup.value.filter);
    return queryFieldLogic ? { queryFields: queryFieldLogic } : undefined;
  }

  private createForm() {
    if (this.block?.root) {
      const root = this.formsService.getFormRoot(this.block.root);
      if (root) {
        this.logicBuilder.setModel(root);
      }
    }

    this.formGroup = this.formBuilder.group({
      root: [this.block!.root],
      index: [this.block!.index],
      filter: [this.retrieveFilterFromParams()],
      useCategory: [CoreUtils.getBlockParamsBooleanValue(this.block, "useCategory", false)],
    });

    this.subscription = this.formGroup.valueChanges.subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      root: this.block!.root,
      index: this.block!.index,
      filter: [this.retrieveFilterFromParams()],
      useCategory: CoreUtils.getBlockParamsBooleanValue(this.block, "useCategory", false),
    }, { emitEvent: false });
  }

  private onFormupdate() {
    this.block!.root = this.formGroup.value.root;
    this.block!.index = this.formGroup.value.index;
    this.block!.params = {
      ...this.block?.params,
      useCategory: this.formGroup.value.useCategory,
      query: this.retrieveQueryFromFilter(),
    };    
    this.updateFilter();
    this.blockChanges.emit(this.context);
  }

  private get block() { return this.context.block };
}
