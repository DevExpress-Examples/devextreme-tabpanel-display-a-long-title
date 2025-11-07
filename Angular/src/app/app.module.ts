import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  DxTabPanelModule,
  DxCheckBoxModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { AppComponent } from './app.component';
import { TabPanelCommonComponent } from './tab-panel-common/tab-panel-common.component';

@NgModule({
  declarations: [
    AppComponent,
    TabPanelCommonComponent,
  ],
  imports: [
    BrowserModule,
    DxTabPanelModule,
    DxCheckBoxModule,
    DxTemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
