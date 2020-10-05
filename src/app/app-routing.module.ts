import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FootballComponent } from './football/football.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

const routes: Routes = [
 
  {
    path:'football',
    loadChildren: () => import('./football/football.module').then(m=>m.FootballModule)
  },
  {
    path:'playerdetails',
    loadChildren: () => import('./player-details/player-details.module').then(m=>m.PlayerDetailsModule)
  },
  {
    path:'football-clubs',
    loadChildren: () => import('./football-clubs/football-clubs.module').then(m=>m.FootballClubsModule)
  },
  {
    path:'leagues',
    loadChildren: () => import('./leagues/leagues.module').then(m=>m.LeaguesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
