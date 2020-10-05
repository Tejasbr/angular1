import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  public details:Array<any> = [];
  constructor(private el: EmployeeService) { }

  ngOnInit() {
    this.details = this.el.playerdetail();
  }
  

}
