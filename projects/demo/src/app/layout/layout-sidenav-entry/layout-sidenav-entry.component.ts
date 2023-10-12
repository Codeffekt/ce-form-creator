import { Component, Input, OnInit } from '@angular/core';

export interface LayoutSidenavEntry {
  label: string;
  link: string;
}

@Component({
  selector: 'app-layout-sidenav-entry',
  templateUrl: './layout-sidenav-entry.component.html',
  styleUrls: ['./layout-sidenav-entry.component.scss']
})
export class LayoutSidenavEntryComponent implements OnInit {

  @Input() entry!: LayoutSidenavEntry;

  constructor() { }

  ngOnInit(): void {
  }

}
