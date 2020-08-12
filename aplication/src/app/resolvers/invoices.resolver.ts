import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Invoices } from './../models-project/Invoices';
import { FactureService } from './../models-services/facture/facture.service';

/*RESOLVER PARA RETORNAR OS INVOICES*/

@Injectable()
export class InvoicesResolver implements Resolve<Invoices> {
    constructor(private factureService: FactureService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Invoices> {
        return this.factureService.read().pipe(
            catchError(error => {
                this.router.navigate(['/home']);
                console.log(error)
                return of(null);
            })
        );
    }
}