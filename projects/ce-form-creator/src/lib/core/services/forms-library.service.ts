import { Injectable } from "@angular/core";
import { FormRoot, FormUtils } from "@codeffekt/ce-core-data";

@Injectable({ providedIn: 'root' })
export class FormsLibraryService {

    private roots: FormRoot[] = [];

    setForms(roots: FormRoot[]) {
        this.roots = roots;
    }

    getForms(): FormRoot[] {
        return this.roots;
    }

    getFormWithDeps(root: FormRoot): FormRoot[] {
        const elts = this.findFormDeps(root, [ root ]);        
        return elts;
    }

    private findFormDeps(root: FormRoot, curList: FormRoot[]): FormRoot[] {
        const elts = FormUtils.getBlocks(root)
            .filter(block => FormUtils.isBlockFormArray(block) || FormUtils.isBlockIndex(block))
            .filter(block => block.root !== undefined && !curList.find(elt => elt.id === block.root))
            .map(block => block.root!)
            .map(index => this.getForms().find(elt => elt.id === index))
            .filter((form): form is FormRoot => form !== undefined);
        for(const elt of elts) {
            curList = this.findFormDeps(elt, [ elt, ...curList ]);        
        }
        return curList; 
    }
}