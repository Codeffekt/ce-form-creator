import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreatorContext } from '../../../core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ValidatorsDialogComponent } from '../../dialogs';
import { filter } from 'rxjs';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ce-form-block-prop-validators',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    CeLayoutModule,
    MatIconModule,
  ],
  templateUrl: './form-block-prop-validators.component.html',
  styleUrls: ['./form-block-prop-validators.component.scss']
})
export class FormBlockPropValidatorsComponent {

  @Input() context!: FormCreatorContext;

  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  private dialog = inject(MatDialog);

  currentValidators: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['context']) {
      this.updateCurrentValidators();
    }
  }

  addValidator() {

    const dialogRef = ValidatorsDialogComponent.open(this.dialog, {
      validators: ["required"]
    });

    dialogRef.afterClosed().pipe(
      filter(validator => validator !== undefined)
    ).subscribe(validator => {
      if (!this.currentValidators.includes(validator)) {
        this.currentValidators.push(validator);
      }
      this.onBlockUpdate();
    });
  }

  deleteValidator(validator: string) {    
    if(this.currentValidators.includes(validator)) {
      this.currentValidators = this.currentValidators.filter(v => v !== validator);
      this.onBlockUpdate();
    }
  }

  private onBlockUpdate() {
    if(!this.block?.params?.validators) {
      this.block!.params = {
        ...this.block?.params,
        validators: []
      };
    }
    this.block!.params.validators = this.currentValidators;
    this.blockChanges.emit(this.context);
  }

  private updateCurrentValidators() {
    this.currentValidators = this.block?.params?.validators ?? [];
  }

  private get block() { return this.context.block };
}
