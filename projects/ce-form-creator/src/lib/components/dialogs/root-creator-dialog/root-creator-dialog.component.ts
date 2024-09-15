import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

export type FormRootCreatorConfig = {
  root: string|undefined;
}

@UntilDestroy()
@Component({
  selector: 'ce-root-creator-dialog',
  templateUrl: './root-creator-dialog.component.html',
  styleUrls: ['./root-creator-dialog.component.scss']
})
export class RootCreatorDialogComponent {

  formConfig: FormRootCreatorConfig = {
    root: undefined
  };

  formGroup!: UntypedFormGroup; 

  static createDialog(): MatDialogConfig {   
    
    return {
      width: "350px",      
    };
  }

  constructor(
    private fb: UntypedFormBuilder,
    private dialogRef: MatDialogRef<RootCreatorDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.createForm();    
  }

  private createForm() {
    this.formGroup = this.fb.group({
      root: [this.formConfig.root, Validators.required]
    });

    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(formConfig => this.formConfig = formConfig);
  }  

  dismiss() {
    this.dialogRef.close();
  }

}
