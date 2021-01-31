import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './front-office/static-elements/nav-bar/nav-bar.component';
import { FooterComponent } from './front-office/static-elements/footer/footer.component';
import { FullIntroComponent } from './front-office/static-elements/full-intro/full-intro.component';
import { WelcomeComponent } from './front-office/welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppBootStrapModule } from './shared/app-boot-strap/app-boot-strap.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PostRequest1Component } from './back-office/users/request/post-request1/post-request1.component';
import { PostRequestColis1Component } from './back-office/users/request/post-request-colis/post-request-colis1/post-request-colis1.component';
import { PostRequestColis2Component } from './back-office/users/request/post-request-colis/post-request-colis2/post-request-colis2.component';
import { PostRequestColis3Component } from './back-office/users/request/post-request-colis/post-request-colis3/post-request-colis3.component';
import { PostRequestTransport1Component } from './back-office/users/request/post-request-transport/post-request-transport1/post-request-transport1.component';
import { PostRequestTransport2Component } from './back-office/users/request/post-request-transport/post-request-transport2/post-request-transport2.component';
import { PostRequestTransport3Component } from './back-office/users/request/post-request-transport/post-request-transport3/post-request-transport3.component';
import { PostTripCarrierShipper1Component } from './back-office/users/trips/post-trip-carrier-shipper/post-trip-carrier-shipper1/post-trip-carrier-shipper1.component';
import { PostTripCarrierShipper2Component } from './back-office/users/trips/post-trip-carrier-shipper/post-trip-carrier-shipper2/post-trip-carrier-shipper2.component';
import { PostTripTransport1Component } from './back-office/users/trips/post-trip-transport1/post-trip-transport1.component';
import { UserRegistration1Component } from './front-office/user-registration/user-registration1/user-registration1.component';
import { UserRegistration2Component } from './front-office/user-registration/user-registration2/user-registration2.component';
import { UserRegistration3Component } from './front-office/user-registration/user-registration3/user-registration3.component';
import { UserRegistrationComponent } from './front-office/user-registration/user-registration/user-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterCarrierShipperTransporterComponent } from './front-office/registration/register-carrier-shipper-transporter/register-carrier-shipper-transporter.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Components
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProfileCarrierBusinessComponent } from './back-office/users/profile/profile-carrier-business/profile-carrier-business.component';
import { ProfileCarrierComponent } from './back-office/users/profile/profile-carrier/profile-carrier.component';
import { ViewTripCarrierShipmentComponent } from './front-office/view-trip/view-trip-carrier-shipment/view-trip-carrier-shipment.component';
// tslint:disable-next-line:max-line-length
import { ViewTripTransportPersonsComponent } from './front-office/view-trip/view-trip-transport-persons/view-trip-transport-persons.component';
import { ProfileNormalUserComponent } from './back-office/users/profile/profile-normal-user/profile-normal-user.component';
import { LoginComponent } from './front-office/login/login.component';
import { ForgotPasswordComponent } from './front-office/forgot-password/forgot-password.component';
import { TestPagesComponent } from './test-pages/test-pages.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './front-office/about-us/about-us.component';
import { TermsAndConditionsComponent } from './shared/components/terms-and-conditions/terms-and-conditions.component';
import { RegisterComponent } from './front-office/register/register.component';
import { HowDoesItWorkComponent } from './front-office/how-does-it-work/how-does-it-work.component';
import { TripsModule } from './back-office/users/trips/trips.module';
import { RequestsComponent } from './front-office/requests/requests.component';
import { BlankPageComponent } from './shared/blank-page/blank-page.component';
import { AdminLayoutComponent } from './back-office/users/admin-layout/admin-layout.component';
import { NavbarModule } from './back-office/users/shared/navbar/navbar.module';
import { FooterModule } from './back-office/users/shared/footer/footer.module';
import { RouterModule } from '@angular/router';
import { UserService } from './back-office/users/shared/services/user.service';
import { SidebarModule } from './back-office/users/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    FullIntroComponent,
    WelcomeComponent,
    PostRequest1Component,
    PostRequestColis1Component,
    PostRequestColis2Component,
    PostRequestColis3Component,
    PostRequestTransport1Component,
    PostRequestTransport2Component,
    PostRequestTransport3Component,
    PostTripCarrierShipper1Component,
    PostTripCarrierShipper2Component,
    PostTripTransport1Component,
    UserRegistration1Component,
    UserRegistration2Component,
    UserRegistration3Component,
    UserRegistrationComponent,
    RegisterCarrierShipperTransporterComponent,
    ProfileCarrierBusinessComponent,
    ProfileCarrierComponent,
    ViewTripCarrierShipmentComponent,
    ViewTripTransportPersonsComponent,
    ProfileNormalUserComponent,
    LoginComponent,
    ForgotPasswordComponent,
    TestPagesComponent,
    PrivacyPolicyComponent,
    AboutUsComponent,
    TermsAndConditionsComponent,
    RegisterComponent,
    HowDoesItWorkComponent,
    RequestsComponent,
    BlankPageComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TripsModule,
    RouterModule,
    NgbModule,
    AppBootStrapModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // material import
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatNativeDateModule,
    NavbarModule,
    FooterModule,
    SidebarModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
