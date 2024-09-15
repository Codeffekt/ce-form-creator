import { inject, Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable()
export class MessagesService {

    private snackBar = inject(MatSnackBar);

    showSingleMessage(msg: string, config: MatSnackBarConfig<any> = { duration: 2000 }) {
        this.snackBar.open(msg, undefined, config);
    }

    showErrorMessage(msg: string) {
        this.showSingleMessage(msg, { panelClass: 'error', duration: 5000 });
    }
}