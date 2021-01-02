import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgxPaginationModule
    ],

    exports: [
        HeaderComponent,
        FooterComponent,
    ],
    providers: [
        DatePipe,
    ],
})
export class SharedModule { }
