import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Customer } from '../customer.model';
import { CustomerState } from './customer.reducer';

export const loadCustomers = createAction('[Customer] Load Customers via service');
export const loadCustomersSuccess = createAction(
    '[Customer] Customers Loaded Successfully',
    props<{ customers: Customer[] }>()
);
export const loadCustomersFails = createAction('[Customer] Load Customer Fail');

export const addCustomer = createAction(
    '[Customer] add Customer',
    props<{ customer: CustomerState }>()
);

export const updateCustomer = createAction(
    '[Customer] update Customer',
    props<{ update: Update<Customer> }>()
);

export const deleteCustomer = createAction(
    '[Customer] delete Customer',
    props<{ customerId: string }>()
);

export const findCustomerById = createAction(
    '[Customer] find by Customer id',
    props<{ customerId }>()
);

export const customerActionTypes = {
    loadCustomers,
    loadCustomersSuccess,
    loadCustomersFails,
    addCustomer,
    updateCustomer,
    deleteCustomer
}