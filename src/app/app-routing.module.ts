import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', loadChildren: () => import('./front-office/front-office.module').then(m => m.FrontOfficeModule) }
    // {
    //   path: '**',
    //   loadChildren: () => import('./pages/blank-page/blank-page.module').then(mod => mod.BlankPageModule)
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
