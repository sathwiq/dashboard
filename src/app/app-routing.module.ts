
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PieComponent } from './dashboard/pie/pie.component';
const routes: Routes = [
    {path: 'home', component: DashboardComponent},
    {path: 'profile', component: ProfileComponent},
 { path: '**', redirectTo: '/home' }
 ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }