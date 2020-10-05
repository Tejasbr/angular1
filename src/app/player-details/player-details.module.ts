import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerDetailsRoutingModule } from './player-details-routing.module';
import { PlayerDetailsComponent } from './player-details.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { UppercasePipe } from '../uppercase.pipe';



@NgModule({
  declarations: [PlayerDetailsComponent, UppercasePipe],
  imports: [
    CommonModule,
    PlayerDetailsRoutingModule,
    SharedModuleModule
  ]
})
export class PlayerDetailsModule { }
