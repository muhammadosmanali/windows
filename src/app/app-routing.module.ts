import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {StartComponent} from './header/start/start.component';
import {ExplorerComponent} from './header/explorer/explorer.component';
import {DesktopComponent} from './header/desktop/desktop.component';
import {BrowserComponent} from './header/browser/browser.component';
import {SettingComponent} from './header/setting/setting.component';


const routes: Routes = [
  {path: '', component: DesktopComponent},
  {path: 'start', component: StartComponent},
  {path: 'explorer', component: ExplorerComponent},
  {path: 'browser', component: BrowserComponent},
  {path: 'setting', component: SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
