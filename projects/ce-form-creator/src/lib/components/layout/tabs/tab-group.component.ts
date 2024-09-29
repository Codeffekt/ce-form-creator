import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TabComponent } from './tab.component';

@UntilDestroy()
@Component({
  selector: 'ce-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();
  @Input() selectedIndex?: number;
  @Output() onSelect = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.initActiveTab();
    this.listenTabActiveChanges();    
  }

  selectTab(tab: TabComponent) {
    const activeTab = this.getActiveTab();
    if (tab !== activeTab) {
      tab.active = true;
      this.onSelect.emit(tab);
    }
  }

  deselectTabsExcept(activeTab: TabComponent) {
    this.tabs.filter(tab => tab !== activeTab).forEach(tab => {
      tab.active = false;
    });
  }

  private initActiveTab() {
    const activeTabs: TabComponent[] = this.tabs.filter((tab) => tab.active);
    const activeTab = activeTabs.length ? activeTabs[0] : this.tabs.first;
    this.selectTab(activeTab);
  }
  
  private listenTabActiveChanges() {
    this.tabs.map(tab => {
      tab.activeChanges
        .pipe(untilDestroyed(this))
        .subscribe(activeTab => {
          this.deselectTabsExcept(activeTab);
        });
    });
  }

  private getActiveTab(): TabComponent | undefined {
    return this.tabs.find(tab => tab.active);
  }
}
