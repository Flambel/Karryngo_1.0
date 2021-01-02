import { NgModule } from '@angular/core';
import { AdminComponentModule } from './admin-components/admin-components.module';


@NgModule({
    declarations: [
        //Components
    ],

    imports: [
        AdminComponentModule,
    ],

    exports: [
        // HeaderComponent,
        // FooterComponent,
    ],
    providers: [
    ],
})
export class AdminModule { }
