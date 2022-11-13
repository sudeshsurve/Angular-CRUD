import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeturesComponent } from './authotication-component/fetures/fetures.component';
import { LoginComponent } from './authotication-component/login/login.component';
import { ProfileComponent } from './authotication-component/profile/profile.component';
import { SignUpComponent } from './authotication-component/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '' , redirectTo:'login', pathMatch:'full'},
  {path :'sign-up' , component :SignUpComponent},
  {path : 'login' , component  : LoginComponent},
  {
    path: 'Admin', canActivate:[AuthGuard],
    loadChildren: () => import('./User-module/user-module/user-module.module').then(m => m.UserModuleModule)
  },
  {path:'profile',canActivate:[AuthGuard] , component:ProfileComponent},
  {path:'fetures',canActivate:[AuthGuard] , component:FeturesComponent},
  {path:'**' , component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
