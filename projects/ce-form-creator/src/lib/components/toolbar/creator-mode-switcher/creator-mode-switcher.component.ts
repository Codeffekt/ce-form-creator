import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormCreatorMode, FormCreatorModeService } from '../../../core';

@Component({
  selector: 'ce-creator-mode-switcher',
  templateUrl: './creator-mode-switcher.component.html',
  styleUrls: ['./creator-mode-switcher.component.scss']
})
export class CreatorModeSwitcherComponent implements OnInit {

  mode$: Observable<FormCreatorMode> = this.modeService.modeChanges();

  constructor(private modeService: FormCreatorModeService) { }

  ngOnInit(): void { }

  switchModeToMask() {
    this.modeService.triggerMaskMode();
  }

  switchModeToRendering() {
    this.modeService.triggerRenderingMode();
  }

  switchModeToConception() {
    this.modeService.triggerConceptionMode();
  }
}
