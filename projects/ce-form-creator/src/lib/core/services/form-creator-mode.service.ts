import { inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormCreatorMode } from '../models';
import { Mode, ModeSelectors } from '../store/mode';

@Injectable()
export class FormCreatorModeService {

  private mode$: Observable<FormCreatorMode> = inject(Store).select(ModeSelectors.getMode);

  constructor(private store: Store) { }

  triggerConceptionMode() {
    this.triggerMode('conception');
  }

  triggerMaskMode() {
    this.triggerMode('mask');
  }

  triggerRenderingMode() {
    this.triggerMode('rendering');
  }

  modeChanges() {
    return this.mode$;
  }

  private triggerMode(mode: FormCreatorMode) {
    this.store.dispatch(new Mode.Switch(mode));
  }
}
