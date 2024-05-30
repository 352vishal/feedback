import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addData(data: Data) {
    return this.http.post('http://localhost:3000/data', data);
  }
  customersList() {
    return this.http.get<Data[]>('http://localhost:3000/data');
  }
  deleteData(id: number) {
    return this.http.delete(`http://localhost:3000/data/${id}`);
  }
}
