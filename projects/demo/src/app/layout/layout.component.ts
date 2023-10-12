import { Component, OnInit } from '@angular/core';
import { LayoutSidenavEntry } from './layout-sidenav-entry/layout-sidenav-entry.component';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  entries: LayoutSidenavEntry[] = [
    { label: 'Container', link: 'container' },
    { label: 'Sidenav', link: 'sidenav' },
    { label: 'Column', link: 'column' },
    { label: 'Grid', link: 'grid' },
    { label: 'Overflow', link: 'overflow' },
    { label: 'Padding', link: 'padding' },
    { label: 'Row', link: 'row' },
  ]

  constructor() { }

  ngOnInit(): void { }
}
