import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesRoutingModule } from './leagues-routing.module';
import { LeaguesComponent } from './leagues.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [LeaguesComponent],
  imports: [
    CommonModule,
    LeaguesRoutingModule,
    SharedModuleModule
  ]
})
export class LeaguesModule { }
