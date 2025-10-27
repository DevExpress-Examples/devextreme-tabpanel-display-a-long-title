import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabPanelCommonComponent } from "./tab-panel-common/tab-panel-common.component";

import {
  DxTabPanelModule,
  DxCheckBoxModule,
  DxTemplateModule
} from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent,
		TabPanelCommonComponent
  ],
  imports: [
    BrowserModule,
		DxTabPanelModule,
		DxCheckBoxModule,
		DxTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
