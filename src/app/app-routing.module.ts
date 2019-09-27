import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
          RouterModule.forRoot(routes),
          FlexLayoutModule
        ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
