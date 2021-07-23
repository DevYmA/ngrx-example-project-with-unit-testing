import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state';
import { Customer } from '../customer.model';
import { loadCustomers } from '../state/customer.action';
import { getAllCustomers } from '../state/customer.selector';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers$ : Observable<Customer[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCustomers());
    this.customers$ = this.store.select(getAllCustomers);
  }

}
