import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/core/guards/auth.guard';

import { WelcomeComponent } from './front-office/welcome/welcome.component';
import { UserRegistrationComponent } from './front-office/user-registration/user-registration/user-registration.component';
import { PostRequest1Component } from './back-office/users/post-request1/post-request1.component';
import { LoginComponent } from './front-office/login/login.component';
import { ForgotPasswordComponent } from './front-office/forgot-password/forgot-password.component';
import { ProfileCarrierComponent } from './back-office/users/profile/profile-carrier/profile-carrier.component';
import { ProfileCarrierBusinessComponent } from './back-office/users/profile/profile-carrier-business/profile-carrier-business.component';
import { ProfileNormalUserComponent } from './back-office/users/profile/profile-normal-user/profile-normal-user.component';
// tslint:disable-next-line:max-line-length
import { RegisterCarrierShipperTransporterComponent } from './front-office/registration/register-carrier-shipper-transporter/register-carrier-shipper-transporter.component';
import { ViewTripCarrierShipmentComponent } from './front-office/view-trip/view-trip-carrier-shipment/view-trip-carrier-shipment.component';
// tslint:disable-next-line:max-line-length
import { ViewTripTransportPersonsComponent } from './front-office/view-trip/view-trip-transport-persons/view-trip-transport-persons.component';
import { TestPagesComponent } from './test-pages/test-pages.component';
import { PostRequestColis1Component } from './back-office/users/post-request-colis/post-request-colis1/post-request-colis1.component';
import { PostRequestColis2Component } from './back-office/users/post-request-colis/post-request-colis2/post-request-colis2.component';
import { PostRequestColis3Component } from './back-office/users/post-request-colis/post-request-colis3/post-request-colis3.component';
// tslint:disable-next-line:max-line-length
import { PostRequestTransport1Component } from './back-office/users/post-request-transport/post-request-transport1/post-request-transport1.component';
// tslint:disable-next-line:max-line-length
import { PostRequestTransport2Component } from './back-office/users/post-request-transport/post-request-transport2/post-request-transport2.component';
// tslint:disable-next-line:max-line-length
import { PostRequestTransport3Component } from './back-office/users/post-request-transport/post-request-transport3/post-request-transport3.component';
// tslint:disable-next-line:max-line-length
import { PostTripCarrierShipper1Component } from './back-office/users/post-trip-carrier-shipper/post-trip-carrier-shipper1/post-trip-carrier-shipper1.component';
// tslint:disable-next-line:max-line-length
import { PostTripCarrierShipper2Component } from './back-office/users/post-trip-carrier-shipper/post-trip-carrier-shipper2/post-trip-carrier-shipper2.component';
import { PostTripTransport1Component } from './back-office/users/post-trip-transport1/post-trip-transport1.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './front-office/about-us/about-us.component';
import { TermsAndConditionsComponent } from './shared/components/terms-and-conditions/terms-and-conditions.component';
import { RegisterComponent } from './front-office/register/register.component'
import { HowDoesItWorkComponent } from './front-office/how-does-it-work/how-does-it-work.component';
import { RequestsComponent } from './front-office/requests/requests.component';
import { BlankPageComponent } from './shared/blank-page/blank-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    component: WelcomeComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'test',
    component: TestPagesComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'index',
    component: WelcomeComponent
  },
  {
    path: 'home',
    component: WelcomeComponent
  },
  {
    path: 'view-trip-carrier-shipment',
    component: ViewTripCarrierShipmentComponent
  },
  {
    path: 'view-trip-transport-of-person',
    component: ViewTripTransportPersonsComponent
  },
  {
    path: 'registration',
    component: RegisterCarrierShipperTransporterComponent
  },
  {
    path: 'profie-carrier',
    component: ProfileCarrierComponent
  },
  {
    path: 'profie-carrier-business',
    component: ProfileCarrierBusinessComponent
  },
  {
    path: 'profie-normal-user',
    component: ProfileNormalUserComponent
  },
  {
    path: 'user-registration',
    component: UserRegistrationComponent
  },
  {
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'post-request',
    component: PostRequest1Component
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'post-request-colis-1',
    component: PostRequestColis1Component
  },
  {
    path: 'post-request-colis-2',
    component: PostRequestColis2Component
  },
  {
    path: 'post-request-colis-3',
    component: PostRequestColis3Component
  },
  {
    path: 'post-request-transport-1',
    component: PostRequestTransport1Component
  },
  {
    path: 'post-request-transport-2',
    component: PostRequestTransport2Component
  },
  {
    path: 'post-request-transport-3',
    component: PostRequestTransport3Component
  },
  {
    path: 'post-trip-carrier-shipper-1',
    component: PostTripCarrierShipper1Component
  },
  {
    path: 'post-trip-carrier-shipper-2',
    component: PostTripCarrierShipper2Component
  },
  {
    path: 'post-trip-transport',
    component: PostTripTransport1Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  // {
  //   path: 'trips',
  //   component: TripsComponent
  // },
  {
    path: 'trips',
    loadChildren: () => import('./back-office/users/trips/trips.module')
      .then(mod => mod.TripsModule)
  },
  {
    path: 'how-does-it-work',
    component: HowDoesItWorkComponent
  },
  {
    path: '**',
    component: BlankPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
