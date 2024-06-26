import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBlockPropEditComponent } from './form-block-prop-edit.component';
import { FormBlockCorePropEditComponent } from './form-block-core-prop-edit/form-block-core-prop-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBlockPropFactoryComponent } from './form-block-prop-factory/form-block-prop-factory.component';
import { FormBlockPropTextComponent } from './form-block-prop-text/form-block-prop-text.component';
import { FormBlockEditStoreService } from '../../core/services/form-block-edit-store.service';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { CePanelModule } from '../layout/panel/panel.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBlockPropIndexComponent } from './form-block-prop-index/form-block-prop-index.component';
import { FormBlockPropArrayComponent } from './form-block-prop-array/form-block-prop-array.component';
import { FormBlockPropAssocComponent } from './form-block-prop-assoc/form-block-prop-assoc.component';

@NgModule({
    imports: [
        CommonModule,
        CeLayoutModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        CePanelModule
    ],
    exports: [
        FormBlockPropEditComponent,
    ],
    declarations: [
        FormBlockPropEditComponent,
        FormBlockCorePropEditComponent,
        FormBlockPropFactoryComponent,
        FormBlockPropTextComponent,
        FormBlockPropIndexComponent,
        FormBlockPropArrayComponent,
        FormBlockPropAssocComponent,
    ],
    providers: [],
})
export class CeFormBlockPropEditModule {

    constructor(private store: FormBlockEditStoreService) {
        this.store.setComponents({
            "text": FormBlockPropTextComponent,
            "index": FormBlockPropIndexComponent,
            "formArray": FormBlockPropArrayComponent,
            "formAssoc": FormBlockPropAssocComponent,
        });
    }

}
