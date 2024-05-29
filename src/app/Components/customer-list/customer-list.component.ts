import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { data } from '../../data-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{

  customerList: undefined | data[];

  constructor( private data: DataService ){}

  ngOnInit(): void {
    this.list();
  }

  deleteData(id: number) {
    if(confirm(" Do you want to delete ?"))
    this.data.deleteData(id).subscribe((result) => {
      if (result) {
        this.list();
      }
    });
  }

  list(){
     this.data.customersList().subscribe((result) => {
      if (result) {
        this.customerList = result
      }
    })
  }

}
