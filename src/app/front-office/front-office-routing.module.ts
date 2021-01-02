import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { TripsComponent } from './components/trips/trips.component';
import { HowDoesItWorkComponent } from './components/how-does-it-work/how-does-it-work.component';
import { RequestsComponent } from './components/requests/requests.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FrontOfficeComponent } from './front-office.component';
import { BlankPageComponent } from '../shared/pages/blank-page/blank-page.component';

const routes: Routes = [
  {
    path: '', component: FrontOfficeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      // { path: 'trips', component: TripsComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'how-does-it-work', component: HowDoesItWorkComponent },
      { path: 'requests', component: RequestsComponent },
      { path: 'reset-forgotten-password', component: ForgotPasswordComponent },
      { path: 'verify-email', component: VerifyEmailComponent },
      {
        path: 'trips',
        loadChildren: () => import('./../shared/shared.module')
          .then(mod => mod.SharedModule)
      },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
