import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripsListComponent } from './trips-list.component';

const routes: Routes = [
  { path: '', component: TripsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsListRoutingModule { }
