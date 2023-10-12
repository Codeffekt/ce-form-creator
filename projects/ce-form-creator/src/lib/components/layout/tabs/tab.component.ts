import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ce-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {

  @Output()
  activeChange = new EventEmitter<boolean>();

  @Input('active')
  @HostBinding('class.active')
  set active(newValue: boolean) {

    if (this._active != newValue) {
      this.activeChange.emit(newValue);
    }

    this._active = newValue;

    if (this._active) {
      this.activeChanges.emit(this);
    }
  }

  get active() {
    return this._active;
  }

  @Input()
  label?: string;

  activeChanges = new EventEmitter<TabComponent>();

  private _active!: boolean;
}
