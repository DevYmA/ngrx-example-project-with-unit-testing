import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerState, selectAll } from "./customer.reducer";

export const customerFeatureSelector = createFeatureSelector<CustomerState>("customers");

export const getAllCustomers = createSelector(
    customerFeatureSelector,
    selectAll
);