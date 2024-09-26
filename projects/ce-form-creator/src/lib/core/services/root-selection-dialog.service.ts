import { inject, Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { FormsLibraryService } from "./forms-library.service";
import { RootSelectionDialogComponent } from "../../components/dialogs/root-selection-dialog";
import { FormRoot } from "@codeffekt/ce-core-data";
import { filter, map, Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class RootSelectionDialogService {

    private formsLibrary = inject(FormsLibraryService);
    private dialog = inject(MatDialog);

    open(): Observable<FormRoot[]> {

        const roots = this.formsLibrary.getForms();

        return RootSelectionDialogComponent
            .open(this.dialog, { roots })
            .afterClosed()
            .pipe(
                filter(root => root !== undefined),
                map(root => this.formsLibrary.getFormWithDeps(root))
            );
    }

}