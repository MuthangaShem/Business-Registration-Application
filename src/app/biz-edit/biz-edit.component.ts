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

	business: any = {};
	angForm: FormGroup;

  constructor(private route: ActivatedRoute,
  			  private router: Router,
  			  private fb: FormBuilder,
  			  private bs: BusinessService) {
  			  this.createForm() }

  			  createForm(){
  			  	this.angForm = this.fb.group({
  			  		person_name: ['', Validators.required],
  			  		business_name: ['', Validators.required],
  			  		business_kra_number: ['', Validators.required]
  			  	});
  			  };


  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.bs.editBusiness(params['id']).subscribe(res => {
  			this.business = res;
  		});
  	});
  }

}
