import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authotication-component/login/login.component';
import { SignUpComponent } from './authotication-component/sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './authotication-component/header/header.component';
import { ProfileComponent } from './authotication-component/profile/profile.component';
import { FeturesComponent } from './authotication-component/fetures/fetures.component';
import { HttpErrorInterceptor } from './authotication-component/Interceptor/http-error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { LoderComponent } from './loder/loder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ProfileComponent,
    FeturesComponent,
    LoderComponent,
   

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [

    {provide:HTTP_INTERCEPTORS,
      useClass :HttpErrorInterceptor,
      multi:true,
  }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
