import { Customer } from "../customer.model";
import * as customerActionTypes from './customer.action';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface CustomerState extends EntityState<Customer> {
    customerLoading: boolean,
    customerLoaded: boolean,
    error: string
}

export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

export const initialState = customerAdapter.getInitialState({
    customerLoading: false,
    customerLoaded: false,
    error: ""
});

export const customerReducer = createReducer(
    initialState,
    on(customerActionTypes.loadCustomersSuccess, (state, { customers }) => {
        return customerAdapter.addMany(
            customers,
            { ...state, customerLoaded: true, customerLoading: false, error: "" }
        )
    })
);

export const { selectAll, selectIds } = customerAdapter.getSelectors();