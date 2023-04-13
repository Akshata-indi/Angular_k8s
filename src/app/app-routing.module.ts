import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { BasicDetailsComponent } from './details/basic-details/basic-details.component';
import { LeavePolicyComponent } from './leave/leave-policy.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'basic-details', component:BasicDetailsComponent },
  { path: 'leave-policy', component:LeavePolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
