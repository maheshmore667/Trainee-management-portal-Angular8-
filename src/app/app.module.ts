import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AuthenticateService } from '../services/authenticate.service';
import { EmployeesComponent } from './employees/employees.component';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
//pipes
import { NamesearchPipe } from '../pipes/namesearch.pipe';
import { PhonenumberPipe } from '../pipes/phonenumber.pipe';

//directive
import { HighlightDirective } from '../directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EmployeesComponent,
    SidebarComponent,
    TrainDetailsComponent,
    UpdateComponent,
    PhonenumberPipe,
    NamesearchPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        timeOut:2000,
        positionClass:'toast-bottom-right',
        preventDuplicates:true
      }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
