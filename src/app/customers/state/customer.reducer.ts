import { Customer } from "../customer.model";
import * as customerAction from './customer.action';
import { createReducer, on } from '@ngrx/store';

export interface CustomerState {
    customers: Customer[],
    loading: boolean,
    loaded: boolean,
    error: string
}

export const initialState: CustomerState = {
    customers: [],
    loading: true,
    loaded: false,
    error: ""
}

const _customerReducer = createReducer(
    initialState,
    on(customerAction.loadCustomers, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(customerAction.loadCustomersSuccess, (state, action: any) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            customers: action.payload
        }
    }),
    on(customerAction.loadCustomersFails, (state, action: any) => {
        return {
            ...state,
            customers: [],
            loading: false,
            loaded: false,
            error: action.payload
        }
    })
);

export function customerReducer(state, action) {
    return _customerReducer(state, action);
}