import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee2 } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  getData(): Observable<Employee2[]>
  {
    return this.http.get<Employee2[]>(this.url);
  }

  playerdetail()
  {
    return[
      {
        name: 'TEJAS',
        fId: 1,
        age: 23,
        team: 'Barcelona'
      },
      {
        name: 'NEYMAR',
        fId: 2,
        age: 29,
        team: 'PSG'
      },
      {
        name: 'RONALDO',
        fId: 3,
        age: 38,
        team: 'Juventus'
      },
      {
        name: 'SUAREZ',
        fId: 4,
        age: 36,
        team: 'Real Madrid'
      }
    ];
  
    
  }
}
