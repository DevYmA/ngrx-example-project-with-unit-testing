import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CustomerService } from "../customer.service";
import { customerActionTypes } from "./customer.action";
import { concatMap, map, tap } from 'rxjs/operators';
import { Customer } from "../customer.model";

@Injectable()
export class CustomerEffect {

    constructor(
        private action$: Actions,
        private customerService: CustomerService
    ) { }

    fetchCustomers$ = createEffect(() =>
        this.action$.pipe(
            ofType(customerActionTypes.loadCustomers),
            concatMap(() => this.customerService.getAll()),
            map((customers) => customerActionTypes.loadCustomersSuccess({customers}))
        )
    );


}