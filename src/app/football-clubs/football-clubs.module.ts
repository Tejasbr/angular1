import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootballClubsRoutingModule } from './football-clubs-routing.module';
import { FootballClubsComponent } from './football-clubs.component';
import { MainPlayerComponent } from './main-player/main-player.component';
import { RonaldoComponent } from './ronaldo/ronaldo.component';
import { NeymarComponent } from './neymar/neymar.component';
import { SlideComponent } from './slide/slide.component';


@NgModule({
  declarations: [FootballClubsComponent, MainPlayerComponent, RonaldoComponent, NeymarComponent, SlideComponent],
  imports: [
    CommonModule,
    FootballClubsRoutingModule
  ]
})
export class FootballClubsModule { }
