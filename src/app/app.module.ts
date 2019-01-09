import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BizAddComponent } from './biz-add/biz-add.component';
import { BizGetComponent } from './biz-get/biz-get.component';
import { BizEditComponent } from './biz-edit/biz-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BizAddComponent,
    BizGetComponent,
    BizEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
