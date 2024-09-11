import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockPropAssetComponent } from './form-block-prop-asset.component';

describe('FormBlockPropAssetComponent', () => {
  let component: FormBlockPropAssetComponent;
  let fixture: ComponentFixture<FormBlockPropAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBlockPropAssetComponent]
    });
    fixture = TestBed.createComponent(FormBlockPropAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
