import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FactureService } from './../models-services/facture/facture.service';
import { Invoices } from './../models-project/Invoices';

/*RESOLVER PARA RETORNAR UM INVOICE BY ID*/

@Injectable()
export class InvoiceByIdResolver implements Resolve<Invoices> {
    constructor(private factureService: FactureService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Invoices> {
        return this.factureService.readById(route.params['id']).pipe(
            catchError(error => {
                this.router.navigate(['/home']);
                console.log(error)
                return of(null);
            })
        );
    }
}