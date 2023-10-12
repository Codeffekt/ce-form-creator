import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormFieldComponent } from './form-field.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        FormFieldComponent
    ],
    declarations: [
        FormFieldComponent
    ],
    providers: [],
})
export class CeFormFieldModule { }
