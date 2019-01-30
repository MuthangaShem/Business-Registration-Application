import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-biz-edit',
  templateUrl: './biz-edit.component.html',
  styleUrls: ['./biz-edit.component.css']
})
export class BizEditComponent implements OnInit {

  angForm: FormGroup;
  business: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
        person_name: ['', Validators.required ],
        business_name: ['', Validators.required ],
        business_kra_number: ['', Validators.required ]
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.business = res;
      });
    });
  }

  updateBusiness(person_name, business_name, business_kra_number) {
   this.route.params.subscribe(params => {
      this.bs.updateBusiness(person_name, business_name, business_kra_number, params['id']);
      this.router.navigate(['']);
   });
}
}
