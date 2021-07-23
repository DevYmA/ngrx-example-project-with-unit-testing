import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "./customer.model";

@Injectable()
export class CustomerService{
    
    private customersUrl = "http://localhost:3000/customers";

    constructor(private http:HttpClient){

    }

    getAll(): Observable<Customer[]>{
        return this.http.get<Customer[]>(this.customersUrl);
    }

}