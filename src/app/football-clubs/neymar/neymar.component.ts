import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neymar',
  templateUrl: './neymar.component.html',
  styleUrls: ['./neymar.component.scss']
})
export class NeymarComponent implements OnInit {

  psg:string = "assets/images/neymar.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
