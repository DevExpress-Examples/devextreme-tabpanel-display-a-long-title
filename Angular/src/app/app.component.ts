import { Component } from '@angular/core';

import { TabPanelItem, Service } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service],
})
export class AppComponent  {
	tabPanelItems: TabPanelItem[];

  tabPanels = [
    {
      header: "Display ellipses (...)",
      id: "tabpanel1",
      class: "tabs",
      itemTitleTemplate: "titleEllipses"
    },
    {
      header: "Show full text",
      id: "tabpanel2",
      class: "tabs",
      itemTitleTemplate: "titleDefault"
    },
    {
      header: "Display text line by line",
      id: "tabpanel3",
      itemTitleTemplate: "titleDefault"
    }
  ];

  constructor(service: Service) {
    this.tabPanelItems = service.getTabPanelItems();
  }
}