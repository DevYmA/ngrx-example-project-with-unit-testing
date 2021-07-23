import { createAction, props } from '@ngrx/store';
import { Customer } from '../customer.model';

export const loadCustomers = createAction('[Customer] Load Customers via service');
export const loadCustomersSuccess = createAction(
    '[Customer] Customers Loaded Successfully', 
    props<{customers:Customer[]}>()
);
export const loadCustomersFails = createAction('[Customer] Load Customer Fail');

export const customerActionTypes = {
    loadCustomers,
    loadCustomersSuccess,
    loadCustomersFails
}