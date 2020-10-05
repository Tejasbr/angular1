import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-football-clubs',
  templateUrl: './football-clubs.component.html',
  styleUrls: ['./football-clubs.component.scss']
})
export class FootballClubsComponent implements OnInit {

  barca:string = "assets/images/barca.jpg";
  realmadrid:string = "assets/images/real-madrid.jpg";
  psg:string = "assets/images/psg.jpg";
  manchunited:string = "assets/images/manchesterunited.jpg";
  manchcity:string = "assets/images/manchestercity.jpg";
  portugal:string = "assets/images/portugal.jpg";
  tottenhum:string = "assets/images/Tottenham.jpg";
  liverpool:string = "assets/images/liverpool.jpg";
  chelsea:string = "assets/images/chelsea.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
