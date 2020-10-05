import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  messi2:string = "assets/images/messi2.jpg";
  messi3:string = "assets/images/messi3.jpg";
  messi4:string = "assets/images/messi4.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
