import { NgModule } from '@angular/core';

import { FormTreeInputComponent } from './form-tree-input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
    ],
    exports: [
        FormTreeInputComponent
    ],
    declarations: [FormTreeInputComponent],
    providers: [],
})
export class CeFormTreeInputModule { }
