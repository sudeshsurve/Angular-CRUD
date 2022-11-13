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

@NgModule({
  declarations: [
    DashbordComponent,
    UserFormComponent,
    UserListComponent,
    AdminComponent,
    SearchUserPipe,
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    CanDeactivateGuard
  ]
})
export class UserModuleModule { }
