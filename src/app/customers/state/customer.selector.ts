import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerState, selectAll } from "./customer.reducer";

export const studentFeatureSelector = createFeatureSelector<CustomerState>("customers");

export const getAllCustomers = createSelector(
    studentFeatureSelector,
    selectAll
);