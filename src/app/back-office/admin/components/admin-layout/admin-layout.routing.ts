import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TripsComponent } from '../../trips/trips.component';
import { ServicesComponent } from '../../services/services.component';
import { ChatsComponent } from '../../chats/chats.component';
import { MapsComponent } from '../../maps/maps.component';
import { RequestsComponent } from '../../requests/requests.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'trips', component: TripsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'chats', component: ChatsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'requests', component: RequestsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }
];
