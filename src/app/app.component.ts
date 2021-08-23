import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface UserElement{
  position:number;
  name:string;
  email:string;
}

const ELEMENT_DATA:UserElement[]=[
  { position: 1, name: 'Zara', email: 'zara@gmail.com'},
  { position: 2, name: 'John', email: 'john@gmail.com' },
  { position: 3, name: 'Anna', email: 'anna@gmail.com' },
  { position: 4, name: 'Aru', email: 'aru@gmail.com' },
  { position: 5, name: 'Rakesh', email: 'rakesh@gmail.com' },
  { position: 6, name: 'Karan', email: 'karan@gmail.com' },
  { position: 7, name: 'Smita', email: 'smita@gmail.com' },
  { position: 8, name: 'Dheeraj', email: 'dheeraj@gmail.com' },
  { position: 9, name: 'Shia', email: 'shia@gmail.com' },
  { position: 10, name: 'Sam', email: 'sam@gmail.com' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-paginator';
  displayedColumns:string[]=['position','name','email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA) ;

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

}
