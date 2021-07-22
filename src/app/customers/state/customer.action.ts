import { Customer } from '../customer.model';
import { createAction } from '@ngrx/store';

export const loadCustomers = createAction('[Customer] Load Customers');
export const loadCustomersSuccess = createAction('[Customer] Load Customers Success');
export const loadCustomersFails = createAction('[Customer] Load Customer Fail');