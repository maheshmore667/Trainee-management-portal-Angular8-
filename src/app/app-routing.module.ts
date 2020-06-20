import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AuthenticateService } from '../services/authenticate.service';
import { EmployeesComponent } from './employees/employees.component';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routeArray = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'add',
    component:EmployeesComponent
  },
  {
    path:'single',
    component:TrainDetailsComponent
  },
  {
    path:'update',
    component:UpdateComponent
  }
]

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:SidebarComponent,
    canActivate:[AuthenticateService],
    children:routeArray
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
