import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FootballClubsComponent } from './football-clubs.component';
import { MainPlayerComponent } from './main-player/main-player.component';
import { NeymarComponent } from './neymar/neymar.component';
import { RonaldoComponent } from './ronaldo/ronaldo.component';
import { SlideComponent } from './slide/slide.component';

const routes: Routes = [
  {
    path:'',
    component:FootballClubsComponent
  },
  {
    path:'messi',
    component:MainPlayerComponent
  },
  {
    path:'ronaldo',
    component:RonaldoComponent
  },
  {
    path:'neymar',
    component:NeymarComponent
  },
  {
    path:'slide',
    component:SlideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FootballClubsRoutingModule { }
