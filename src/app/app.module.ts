import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BnkGirlListComponent } from './components/bnk-girl-list/bnk-girl-list.component';
import { BnkGirlComponent } from './components/bnk-girl/bnk-girl.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BnkGirlListComponent,
    BnkGirlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
