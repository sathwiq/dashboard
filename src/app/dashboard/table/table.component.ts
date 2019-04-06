import { Component, OnInit } from '@angular/core';
import { Table } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
   

  dataSource  : Table[] = [
    {position: 1, name: 'java', weight: 40, symbol: 'B'},
    {position: 2, name: 'SE', weight: 60, symbol: 'B'},
    {position: 3, name: 'phython', weight: 80, symbol: 'A'},
    {position: 4, name: 'web', weight: 65, symbol: 'B'},
    {position: 5, name: 'php', weight: 70, symbol: 'A'},
    {position: 6, name: 'node', weight: 90, symbol: 'A'},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor() { }

  ngOnInit() {
    
  }
  

}
