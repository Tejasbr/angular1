import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaguesComponent } from './leagues.component';

const routes: Routes = [
  {
    path:'',
    component:LeaguesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaguesRoutingModule { }
