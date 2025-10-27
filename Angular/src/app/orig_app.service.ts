import { Injectable } from "@angular/core";

export class TabPanelItem {
  title!: string;
}

const tabPanelItems: TabPanelItem[] = [
  {
    title: "Lorem ipsum"
  },
  {
    title: "Lorem ipsum dolor sit amet"
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur"
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
];

@Injectable()
export class Service {
  getTabPanelItems(): TabPanelItem[] {
    return tabPanelItems;
  }
}
