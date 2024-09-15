import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MessagesService } from "./messages.service";

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        MatSnackBarModule,
    ],
    exports: [

    ],
    providers: [
        MessagesService
    ]
})
export class MessagesModule {

}