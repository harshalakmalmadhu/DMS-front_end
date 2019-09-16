import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { SearchComponent } from './user/search/search.component';


const routes: Routes = [
  {path:'',redirectTo:'/user/registration',pathMatch:'full'},
  {
    path:'user',component:UserComponent,
    children:[
    { path:'registration',component:RegistrationComponent},
    {path:'search',component:SearchComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
