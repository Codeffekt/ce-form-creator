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
import { FormBlockPropTimestampComponent } from './form-block-prop-timestamp/form-block-prop-timestamp.component';
import { FormBlockPropBarcodeComponent } from './form-block-prop-barcode/form-block-prop-barcode.component';
import { FormBlockPropAssetComponent } from './form-block-prop-asset/form-block-prop-asset.component';
import { CeFormCreatorDialogs } from '../dialogs';
import { FormBlockPropNumberComponent } from './form-block-prop-number/form-block-prop-number.component';
import { FormBlockPropBooleanComponent } from './form-block-prop-boolean/form-block-prop-boolean.component';
import { FormBlockPropSelectComponent } from './form-block-prop-select/form-block-prop-select.component';
import { FormBlockPropCoordinatesComponent } from './form-block-prop-coordinates/form-block-prop-coordinates.component';

@NgModule({
    imports: [
        CommonModule,
        CeLayoutModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        CePanelModule,
        CeFormCreatorDialogs,
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
        FormBlockPropTimestampComponent,
        FormBlockPropBarcodeComponent,
        FormBlockPropAssetComponent,
        FormBlockPropNumberComponent,
        FormBlockPropBooleanComponent,
        FormBlockPropSelectComponent,
        FormBlockPropCoordinatesComponent,
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
            "timestamp": FormBlockPropTimestampComponent,
            "barcode": FormBlockPropBarcodeComponent,
            "asset": FormBlockPropAssetComponent,
            "number": FormBlockPropNumberComponent,
            "boolean": FormBlockPropBooleanComponent,
            "select": FormBlockPropSelectComponent,
            "coordinates": FormBlockPropCoordinatesComponent,
        });
    }

}
