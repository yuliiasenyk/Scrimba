import { BrowserModule } from '@angular/platform-browser'; //directive
import { NgModule } from '@angular/core';  //decorator


import { AppComponent } from './app.component';

//this decorator provides metadata for the module;
@NgModule({
  //we list our components here
  declarations: [  AppComponent ],
  imports: [
    BrowserModule, CustomersModule, ],
  bootstrap: [AppComponent]  //the first componebt that will be downloaded
})
export class AppModule { }
