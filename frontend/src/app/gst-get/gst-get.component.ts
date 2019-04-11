import { Component, OnInit } from '@angular/core';
import Business from '../Business';
import { BusinessService } from '../business.service';
import { ResourceLoader } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.scss']
})

export class GstGetComponent implements OnInit {
  businesses: Business[];

  constructor(private bs: BusinessService, private router: Router) {}

  ngOnInit() {
    this.bs.getBusinesses()
    .subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log("Deleted");
      this.ngOnInit();
    });
  }
}
