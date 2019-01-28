import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BizAddComponent } from './biz-add/biz-add.component';
import { BizEditComponent } from './biz-edit/biz-edit.component';
import { BizGetComponent } from './biz-get/biz-get.component';

const routes: Routes = [
  {
    path: 'business/create',
    component: BizAddComponent
  },
  {
    path: 'business/edit/:id',
    component: BizEditComponent
  },
  {
    path: 'business',
    component: BizGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
