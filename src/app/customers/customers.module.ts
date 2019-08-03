import { CommonModule } from '@angular/common'; //directive
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';  //decorator
import { SharedModule } from '../shared/shared.module';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';


@NgModule({      //this decorator provides metadata for the module;
  //we list our components here
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent],
  // we import browser module once because i't crucial to first gage. here we only need common module;
  imports: [ CommonModule, SharedModule, FormsModule ],
  exports: [ CustomersComponent ],
})
export class CustomersModule { }
