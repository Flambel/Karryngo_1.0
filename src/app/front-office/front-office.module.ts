import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontOfficeComponent } from './front-office.component';
import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component'
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [RegisterComponent, 
    FrontOfficeComponent, 
    HomeComponent, 
    LoginComponent, 
    ForgotPasswordComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FrontOfficeRoutingModule,
    SharedModule
  ]
})
export class FrontOfficeModule { }
