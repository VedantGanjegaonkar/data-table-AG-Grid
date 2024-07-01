// data-table.component.ts
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
    { headerName: 'Password', field: 'password', sortable: true, filter: true },
    { headerName: 'DOB', field: 'dob', sortable: true, filter: true },
    { headerName: 'Gender', field: 'gender', sortable: true, filter: true },
    { headerName: 'Phone', field: 'phone', sortable: true, filter: true },
    { headerName: 'City', field: 'city', sortable: true, filter: true },
    { headerName: 'State', field: 'state', sortable: true, filter: true },
    { headerName: 'Hobbies', field: 'hobbies', sortable: true, filter: true, valueFormatter: this.hobbiesFormatter }
  ];

  rowData: any[] = [];

  constructor(private userService: ServicesService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.userService.getData().subscribe(
      data => {
        this.rowData = data;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  hobbiesFormatter(params: any) {
    return params.value ? params.value.join(', ') : '';
  }
}
