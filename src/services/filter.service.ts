import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filteredItem = new Subject<string>();
  filteredItem$ = this.filteredItem.asObservable();
  constructor() { }

  sendFilterItem(msg: string) {
    this.filteredItem.next(msg);
  }

}
