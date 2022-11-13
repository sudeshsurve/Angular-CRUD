import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
import { AdminComponent } from '../Pages/admin/admin.component';
import { DashbordComponent } from '../Pages/dashbord/dashbord.component';
import { UserFormComponent } from '../Pages/user-form/user-form.component';
import { UserListComponent } from '../Pages/user-list/user-list.component';

const routes: Routes = [
  {path :'' ,  component:AdminComponent,
  children: [
  {path:'' ,  redirectTo:'/Admin/Dashbord' , pathMatch:'full'},
  {path:'Dashbord' , component:DashbordComponent},
  {path:'user-form',canDeactivate:[CanDeactivateGuard] ,component:UserFormComponent},
  {path:'user-list' , component:UserListComponent},
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
