import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterService } from 'src/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterValue: string;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.filterValue = event.target.value;
    this.filterService.sendFilterItem(this.filterValue);
  }
}
