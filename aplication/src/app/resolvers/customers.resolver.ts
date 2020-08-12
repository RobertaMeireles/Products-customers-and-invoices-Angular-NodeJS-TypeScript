import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from './../models-project/Customer';
import { CustomerService } from './../models-services/customer/customer.service';

/*RESOLVER PARA RETORNAR OS CUSTOMERS*/

@Injectable()
export class CustomersResolver implements Resolve<Customer> {
    constructor(private customerService: CustomerService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Customer> {
        return this.customerService.read().pipe(
            catchError(error => {
                this.router.navigate(['/home']);
                console.log(error)
                return of(null);
            })
        );
    }
}