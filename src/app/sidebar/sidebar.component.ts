import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SideBarService } from '../services/side-bar/sideBar.service';
import { ListingAndReviews } from '../models/listingAndReviews.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  listingAndRevs: ListingAndReviews[] = [];
  ListingAndReviews: any;
  private postSub: Subscription;

  constructor(public sideBarService: SideBarService) { }

  ngOnInit() {
    this.ListingAndReviews = this.sideBarService.getListOfNames();
    alert(JSON.stringify(this.ListingAndReviews));
  }

}
