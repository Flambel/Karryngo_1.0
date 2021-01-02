import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HttpClientModule } from '@angular/common/http';

import { ConfigService } from './services/config/config.service';
import { SharedPipesModule } from './pipes/shared-pipes.module';


@NgModule({
    declarations: [
      SharedComponent,
    ],
    imports: [
      CommonModule,
      SharedRoutingModule,
      HttpClientModule,
      SharedPipesModule
    ],
    exports: [
      SharedComponent,
    ],
    providers: [
      ConfigService,
    ],
  })
export class SharedModule { }

