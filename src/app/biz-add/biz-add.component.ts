import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-biz-add',
  templateUrl: './biz-add.component.html',
  styleUrls: ['./biz-add.component.css']
})
export class BizAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService,private route: ActivatedRoute,
    private router: Router) {
    this.createForm(); 
  }

  createForm(){
    this.angForm = this.fb.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_kra_number: ['', Validators.compose([
        Validators.minLength(7),
        Validators.maxLength(7),
        Validators.pattern(/^-?(0|[0-9]\d*)?$/),
        Validators.required])],
        
    })
  };

  addBusiness(person_name, busines_name, business_kra_number) {
    this.bs.addBusiness(person_name, busines_name, business_kra_number);
    if(this.angForm.valid){
      console.log("Form Submitted!");
      this.angForm.reset();
    }
  }

  ngOnInit() {
  }
}
