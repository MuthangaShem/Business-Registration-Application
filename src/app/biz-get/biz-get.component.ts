import { Component, OnInit } from '@angular/core';
import Business from '../Business.model';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-biz-get',
  templateUrl: './biz-get.component.html',
  styleUrls: ['./biz-get.component.css']
})
export class BizGetComponent implements OnInit {

  businesses: Business[];

  constructor(private bs: BusinessService) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Business[]) => {
        this.businesses = data;
    });
  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
