import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './header/start/start.component';
import { ExplorerComponent } from './header/explorer/explorer.component';
import { DesktopComponent } from './header/desktop/desktop.component';
import { BrowserComponent } from './header/browser/browser.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { SettingComponent } from './header/setting/setting.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StartComponent,
    ExplorerComponent,
    DesktopComponent,
    BrowserComponent,
    LoadingSpinnerComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
