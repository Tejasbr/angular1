import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }


  image1:string = "assets/images/football2.jpg";
  image2:string = "assets/images/greenland1.jpg";
  image3:string = "assets/images/lasvegas3.jpg";

  logoimg:string = "assets/images/logo.jpg";

  public color: String = "black";
  public isClicked: boolean = false;
  // public isClicked2: boolean = false;

  // public employee: Array<Employee2> = [];

  constructor(private el: EmployeeService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  
  clickBtn() {
    this.isClicked = true;
  }
  

  
}
