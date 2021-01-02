import { NgModule } from '@angular/core';
import { AdminComponentModule } from './admin/admin-components/admin-components.module';
import { UserModule } from './user/user.module';


@NgModule({
    declarations: [
        //Components
    ],

    imports: [
        AdminComponentModule,
        UserModule
    ],

    exports: [
        // HeaderComponent,
        // FooterComponent,
    ],
    providers: [
    ],
})
export class BackOfficeModule { }
