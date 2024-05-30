import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Data } from '../../data-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{

  customerList: undefined | Data[];

  customerBox = [
    { selected: false }, 
  ];


  constructor( private dataservices: DataService ){}

  ngOnInit(): void {
    this.list();
  }

  deleteData(id: number) {
    if(confirm(" Do you want to delete ?"))
    this.dataservices.deleteData(id).subscribe((result) => {
      if (result) {
        this.list();
      }
    });
  }

  list(){
     this.dataservices.customersList().subscribe((result) => {
      if (result) {
        this.customerList = result
      }
    })
  }

  boxValue(event:any) {
    const checked = event.target.checked;
    this.customerBox.forEach(item => item.selected = checked);
  }


}
