import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModuleRoutingModule } from './user-module-routing.module';
import { DashbordComponent } from '../Pages/dashbord/dashbord.component';
import { UserFormComponent } from '../Pages/user-form/user-form.component';
import { UserListComponent } from '../Pages/user-list/user-list.component';
import { AdminComponent } from "../Pages/admin/admin.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
import { SearchUserPipe } from "../Pages/search-user.pipe";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from 'src/app/authotication-component/Interceptor/http-error.interceptor';
import { ContactUsComponent } from '../Pages/contact-us/contact-us.component';


@NgModule({
  declarations: [
    DashbordComponent,
    UserFormComponent,
    UserListComponent,
    AdminComponent,
    SearchUserPipe,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    // {provide:HTTP_INTERCEPTORS,
    //   useClass :HttpErrorInterceptor,
    //   multi:true,
    // },
    CanDeactivateGuard,
  ]
})
export class UserModuleModule { }
