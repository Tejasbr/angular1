import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-player',
  templateUrl: './main-player.component.html',
  styleUrls: ['./main-player.component.scss']
})
export class MainPlayerComponent implements OnInit {

  barca:string = "assets/images/messi.jpg";
  constructor( private route: Router) { }

  ngOnInit(): void {
  }

  isclick()
  {
    this.route.navigate(['football-clubs/slide']);
  }
}
