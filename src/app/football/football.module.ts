import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootballRoutingModule } from './football-routing.module';
import { FootballComponent } from './football.component';
import { MouseoverDirective } from '../directive/mouseover.directive';
import { PlayerDetailsComponent } from '../player-details/player-details.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  // declarations: [FootballComponent,PlayerDetailsComponent, MouseoverDirective],
  declarations: [FootballComponent],
  imports: [
    CommonModule,
    FootballRoutingModule,
    SharedModuleModule
  ]
})
export class FootballModule { }
