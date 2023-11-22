import { Component, Input } from "@angular/core";
import { Service, TabPanelItem } from "../app.service";

@Component({
  selector: "tab-panel-common",
  templateUrl: "./tab-panel-common.component.html",
  styleUrls: ["./tab-panel-common.component.scss"],
  providers: [Service]
})

export class TabPanelCommonComponent {
  @Input() itemTitleTemplate!: string;
  @Input() id!: string;
  @Input() class!: string;

  tabPanelItems: TabPanelItem[];

  constructor(service: Service) {
    this.tabPanelItems = service.getTabPanelItems();
  }
}
