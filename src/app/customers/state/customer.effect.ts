import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CustomerService } from "../customer.service";
import { customerActionTypes } from "./customer.action";
import { concatMap, concatMapTo, exhaustMap, map, tap } from 'rxjs/operators';
import { Customer } from "../customer.model";
import { Router } from "@angular/router";

@Injectable()
export class CustomerEffect {

    constructor(
        private action$: Actions,
        private customerService: CustomerService,
        private router: Router
    ) { }

    fetchCustomers$ = createEffect(() =>
        this.action$.pipe(
            ofType(customerActionTypes.loadCustomers),
            concatMap(() => this.customerService.getAll()),
            map((customers) => customerActionTypes.loadCustomersSuccess({ customers }))
        )
    );


    createCustomer$ = createEffect(() =>
        this.action$.pipe(
            ofType(customerActionTypes.addCustomer),
            exhaustMap((action: any) => this.customerService.addCustomer(action.customer)),
            tap(() => this.router.navigateByUrl('/customer'))
        ),
        { dispatch: false }
    );

    updateCustomer$ = createEffect(() =>
        this.action$.pipe(
            ofType(customerActionTypes.updateCustomer),
            exhaustMap((action: any) =>
                this.customerService.updateCustomer(action.update.id, action.update.changes))
        ), { dispatch: false }
    );

    deleteCustomer$ = createEffect(() =>
        this.action$.pipe(
            ofType(customerActionTypes.deleteCustomer),
            exhaustMap((action: any) => this.customerService.deleteCustomer(action.id))
        ), { dispatch: false }
    );
}