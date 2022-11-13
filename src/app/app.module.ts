import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authotication-component/login/login.component';
import { SignUpComponent } from './authotication-component/sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpErrorInterceptor } from "./authotication-component/Interceptor/http-error.interceptor";
import { HeaderComponent } from './authotication-component/header/header.component';
import { ProfileComponent } from './authotication-component/profile/profile.component';
import { FeturesComponent } from './authotication-component/fetures/fetures.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ProfileComponent,
    FeturesComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
        useClass :HttpErrorInterceptor,
        multi:true,
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
