import { NgModule } from '@angular/core';
import { CustomerModule } from './customer/customer.module';
import { ProviderModule } from './provider/provider.module';


@NgModule({
    declarations: [
        //Components
    ],

    imports: [
        CustomerModule,
        ProviderModule
    ],

    exports: [
        // HeaderComponent,
        // FooterComponent,
    ],
    providers: [
    ],
})
export class UserModule { }
