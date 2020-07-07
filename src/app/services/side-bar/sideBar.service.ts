import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListingAndReviews } from '../../models/listingAndReviews.model';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  private requests: any;

  constructor(private http: HttpClient) { }

  getListOfNames() {
    return this.http.get('http://localhost:3000/api/lists')
      .subscribe(res =>
        this.requests = res
      );
  }


}
