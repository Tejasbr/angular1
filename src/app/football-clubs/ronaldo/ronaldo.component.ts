import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ronaldo',
  templateUrl: './ronaldo.component.html',
  styleUrls: ['./ronaldo.component.scss']
})
export class RonaldoComponent implements OnInit {

  realmadrid:string = "assets/images/ronaldo.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
