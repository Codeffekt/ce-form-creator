import { NgModule } from "@angular/core";
import { RootSelectionDialogComponent } from './root-selection-dialog/root-selection-dialog.component';
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { RootCreatorDialogComponent } from './root-creator-dialog/root-creator-dialog.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@NgModule({
    declarations: [    
    RootSelectionDialogComponent, RootCreatorDialogComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatListModule, 
        MatFormFieldModule, 
        MatInputModule,      
    ],
    exports: [
        RootSelectionDialogComponent,
    ]
})
export class CeFormCreatorDialogs { }