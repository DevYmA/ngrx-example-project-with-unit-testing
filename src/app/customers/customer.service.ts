import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "./customer.model";

@Injectable()
export class CustomerService {

    private customersUrl = "http://localhost:3000/customers";

    constructor(private http: HttpClient) {

    }

    getAll(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.customersUrl);
    }

    addCustomer(customer: Customer) {
        return this.http.post(this.customersUrl, customer);
    }

    updateCustomer(customerId: string | number, changes: Partial<Customer>): Observable<any> {
        return this.http.put(`${this.customersUrl}/${customerId}`, changes);
    }

    findCustomerById(customerId:string){
        return this.http.get(`${this.customersUrl}/${customerId}`);
    }

    deleteCustomer(customerId: string){
        return this.http.delete(`${this.customersUrl}/${customerId}`)
    }

}