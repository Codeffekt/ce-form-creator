import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBlockEditComponentType } from '../../../core/models/FormBlockEdit';
import { FormCreatorContext } from '../../../core/models';
import { CommonModule } from '@angular/common';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { CoreUtils } from '../../../core/utils';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TimestampDialogComponent } from '../../dialogs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormBlockCorePropEditComponent,
    ReactiveFormsModule,
    CeLayoutModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    TimestampDialogComponent,
  ],
  selector: 'ce-form-block-prop-timestamp',
  templateUrl: './form-block-prop-timestamp.component.html',
  styleUrls: ['./form-block-prop-timestamp.component.scss']
})
export class FormBlockPropTimestampComponent implements FormBlockEditComponentType {

  @Input() context!: FormCreatorContext;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  formGroup!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private dialog: MatDialog,
  ) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['context']?.firstChange) {
      this.createForm();
    } else {
      this.rebuildForm();
    }    
  }

  ngOnInit(): void {
  }

  openFormat() {
    const dialogRef = TimestampDialogComponent.open(this.dialog, { block: this.block! });

    dialogRef.afterClosed().pipe(
      filter(format => format !== undefined)
    ).subscribe(format => {
      this.block!.params = {
        ...this.block?.params,
        format: format.format,
        timeFormat: format.timeFormat,
      };
      this.blockChanges.emit(this.context);
    });
  }

  onCoreBlockChange(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }

  private createForm() {

    this.formGroup = this.formBuilder.group({
      date: [CoreUtils.getBlockParamsBooleanValue(this.block, "date", true)],   
      time: [CoreUtils.getBlockParamsBooleanValue(this.block, "time", true)],         
    });

    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      date: CoreUtils.getBlockParamsBooleanValue(this.block, "date", true),  
      time: CoreUtils.getBlockParamsBooleanValue(this.block, "time", true),      
    }, { emitEvent: false });
  }

  private onFormupdate() { 
    this.block!.params = {
      ...this.block?.params,
      date: this.formGroup.value.date,  
      time: this.formGroup.value.time,      
    };      
    this.blockChanges.emit(this.context);
  }

  get block() { return this.context.block };
}
