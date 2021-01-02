import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TripsComponent } from '../../trips/trips.component';
import { ServicesComponent } from '../../services/services.component';
import { ChatsComponent } from '../../chats/chats.component';
import { MapsComponent } from '../../maps/maps.component';
import { RequestsComponent } from '../../requests/requests.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TripsComponent,
    ServicesComponent,
    ChatsComponent,
    MapsComponent,
    RequestsComponent,
    UpgradeComponent
  ]
})

export class AdminLayoutModule {}
