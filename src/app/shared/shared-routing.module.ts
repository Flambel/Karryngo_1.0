import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponent } from './shared.component';

const routes: Routes = [
  {
    path: '', component: SharedComponent, children: [
      {
        path: 'continents',
        loadChildren: () => import('./pages/continents-list/continents-list.module').then(mod => mod.ContinentsListModule)
      },
      {
        path: 'countries',
        loadChildren: () => import('./pages/countries-list/countries-list.module').then(mod => mod.CountriesListModule)
      },
      {
        path: 'cities',
        loadChildren: () => import('./pages/cities-list/cities-list.module').then(mod => mod.CitiesListModule)
      },
      {
        path: 'shows',
        loadChildren: () => import('./pages/shows-list/shows-list.module').then(mod => mod.ShowsListModule)
      },
      {
        path: 'trips',
        loadChildren: () => import('./pages/trips-list/trips-list.module').then(mod => mod.TripsListModule)
      },
      {
        path: 'shows-images',
        loadChildren: () => import('./pages/shows-images-list/shows-images-list.module').then(mod => mod.ShowsImagesListModule)
      },
      {
        path: 'trips-images',
        loadChildren: () => import('./pages/trips-images-list/trips-images-list.module').then(mod => mod.TripsImagesListModule)
      },
      {
        path: 'continents/:id',
        loadChildren: () => import('./pages/continents-form/continents-form.module').then(mod => mod.ContinentsFormModule)
      },
      {
        path: 'countries/:id',
        loadChildren: () => import('./pages/countries-form/countries-form.module').then(mod => mod.CountriesFormModule)
      },
      {
        path: 'cities/:id',
        loadChildren: () => import('./pages/cities-form/cities-form.module').then(mod => mod.CitiesFormModule)
      },
      {
        path: 'shows/:id',
        loadChildren: () => import('./pages/shows-form/shows-form.module').then(mod => mod.ShowsFormModule)
      },
      {
        path: 'trips/:id',
        loadChildren: () => import('./pages/trips-form/trips-form.module').then(mod => mod.TripsFormModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/trips-list/trips-list.module').then(mod => mod.TripsListModule)
      },
      // {
      //   path: '**',
      //   loadChildren: () => import('./pages/blank-page/blank-page.module').then(mod => mod.BlankPageModule)
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
