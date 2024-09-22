import { Directive, HostListener, inject } from "@angular/core";
import { CreatorSelectionService, FormRootUpdateService } from "../services";
import { FormCreatorContext } from "../models";

type ClipboardSelection = {
    src?: undefined;
} | {
    src: FormCreatorContext;
    dst?: FormCreatorContext;
};

@Directive({ selector: '[copyPasteSelection]' })
export class CopyPasteSelectionDirective {

    @HostListener('document:keydown.control.v') onCtrlV() {
        this.pasteSelection();
    }

    @HostListener('document:keydown.control.c') onCtrlC() {
        this.copySelection();
    }

    private selectionService = inject(CreatorSelectionService);
    private formUpdateService = inject(FormRootUpdateService);
    private clipboardSelection: ClipboardSelection = {};

    private copySelection() {

        const currentSelection = this.selectionService.getCurrentSelection();

        this.clearClipboard();

        if (!currentSelection?.form || !currentSelection?.block) {
            return;
        }

        this.clipboardSelection = {
            src: currentSelection,
        };

        console.log("Copy", this.clipboardSelection);

    }

    private pasteSelection() {

        const currentSelection = this.selectionService.getCurrentSelection();

        if (!currentSelection?.form || !this.clipboardSelection.src) {
            return;
        }

        this.clipboardSelection.dst = currentSelection;

        console.log("Paste", this.clipboardSelection);

        this.formUpdateService.addNewBlock(
            this.clipboardSelection.dst.form,
            this.clipboardSelection.src.block!
        );
    }

    private clearClipboard() {
        this.clipboardSelection = {};
    }
}