import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BnkGirlListComponent } from './components/bnk-girl-list/bnk-girl-list.component';
import { BnkGirlComponent } from './components/bnk-girl/bnk-girl.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { InstagramComponent } from './components/instagram/instagram.component';
import { InstagramListComponent } from './components/instagram-list/instagram-list.component';
import { InstagramItemComponent } from './components/instagram-item/instagram-item.component';
import { BnkSuffixPipe } from './pipes/bnk-suffix.pipe';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ReactiveFormsModule } from "@angular/forms";
import { EditComponent } from './components/edit/edit.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthGuard } from './guard/auth.guard';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'instagram/:instagramId', component: InstagramComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'admin/edit/:id', component: EditComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BnkGirlListComponent,
    BnkGirlComponent,
    InstagramComponent,
    InstagramListComponent,
    InstagramItemComponent,
    BnkSuffixPipe,
    LoginComponent,
    AdminComponent,
    EditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
