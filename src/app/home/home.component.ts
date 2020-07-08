import { Component, OnInit, Input } from '@angular/core';

import { products } from '../models/products.model';
import { FilterService } from '../../services/filter.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = products;
  items: any;
  filteredItems: any;
  selectedItem: any;

  @Input() public searchResult: Array<any> = [];

  constructor(private http: HttpClient, private filterservice: FilterService) {
  }

  ngOnInit() {

    this.filterservice.filteredItem$
      .subscribe(message => {
        this.filteredItem(message);
      });

    this.getItems().toPromise().then(d => {
      this.items = d;
      const { code, message, records } = d;
      if (code === 0) {
        this.items = records;
        this.filteredItems = records;
      }
      else {
        this.items = [];
        this.filteredItems = [];
      }
    });
  }

  getItems(): Observable<any> {
    // return this.http.post<any>('http://localhost:3000/api/lists', { startDate: '2016-02-02', endDate: '2020-07-01' });
    return this.http.post<any>('http://18.216.249.223:3000/api/lists', { startDate: '2016-02-02', endDate: '2020-07-01' });
  }

  filteredItem(value: string) {
    this.filteredItems = this.items.filter(i => i.name.includes(value));
  }

  onSelectItem(item) {
    this.selectedItem = item;
  }

  share() {
    window.alert('The product has been shared!');
  }
}
