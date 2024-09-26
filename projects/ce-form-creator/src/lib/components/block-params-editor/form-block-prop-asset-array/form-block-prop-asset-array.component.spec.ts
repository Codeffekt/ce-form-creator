import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropAssetArrayComponent } from './form-block-prop-asset-array.component';

describe('FormBlockPropAssetArrayComponent', () => {
  let component: FormBlockPropAssetArrayComponent;
  let fixture: ComponentFixture<FormBlockPropAssetArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormBlockPropAssetArrayComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropAssetArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
