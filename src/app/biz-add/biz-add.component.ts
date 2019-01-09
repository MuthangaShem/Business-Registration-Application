import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-biz-add',
  templateUrl: './biz-add.component.html',
  styleUrls: ['./biz-add.component.css']
})
export class BizAddComponent implements OnInit {

	angForm: FormGroup;
  constructor(private fb: FormBuilder) {
  	this.createForm();
  }

  createForm(){
  	this.angForm = this.fb.group({
  		person_name: ['', Validators.required],
  		business_name: ['', Validators.required],
  		business_kra_number: ['', Validators.required],
  	})
  };

  ngOnInit() {

  }

}
