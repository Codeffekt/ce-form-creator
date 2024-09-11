import { NgModule } from "@angular/core";
import { RootSelectionDialogComponent } from './root-selection-dialog/root-selection-dialog.component';
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";

@NgModule({
    declarations: [    
    RootSelectionDialogComponent
  ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatListModule,        
    ],
    exports: [
        RootSelectionDialogComponent,
    ]
})
export class CeFormCreatorDialogs { }