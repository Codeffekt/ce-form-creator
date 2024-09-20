import { NgModule } from '@angular/core';

import { FormTreeInputComponent } from './form-tree-input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        A11yModule,
    ],
    exports: [
        FormTreeInputComponent
    ],
    declarations: [FormTreeInputComponent],
    providers: [],
})
export class CeFormTreeInputModule { }
