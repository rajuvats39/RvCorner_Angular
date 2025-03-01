import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const routes: Routes = [
  { path: 'register', component: UserRegisterComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
