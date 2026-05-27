import { Component } from '@angular/core';
import { TabPanelItem, Service } from './app.service';
import { DxTabPanelModule, DxCheckBoxModule, DxTemplateModule } from 'devextreme-angular';
import { TabPanelCommonComponent } from './tab-panel-common/tab-panel-common.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DxTabPanelModule, DxCheckBoxModule, DxTemplateModule, TabPanelCommonComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service],
})
export class AppComponent {
  tabPanelItems: TabPanelItem[];

  tabPanels = [
    {
      header: 'Display ellipses (...)',
      id: 'tabpanel1',
      class: 'tabs',
      itemTitleTemplate: 'titleEllipses',
    },
    {
      header: 'Show full text',
      id: 'tabpanel2',
      class: 'tabs',
      itemTitleTemplate: 'titleDefault',
    },
    {
      header: 'Title word-wrap',
      id: 'tabpanel3',
      itemTitleTemplate: 'titleDefault',
    },
  ];

  constructor(service: Service) {
    this.tabPanelItems = service.getTabPanelItems();
  }
}
