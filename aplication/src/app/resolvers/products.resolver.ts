import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './../models-project/Product';
import { ProductService } from './../models-services/product/product.service';

/*RESOLVER PARA RETORNAR OS PRODUTOS*/

@Injectable()
export class ProductsResolver implements Resolve<Product> {
    constructor(private productService: ProductService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Product> {
        return this.productService.read().pipe(
            catchError(error => {
                this.router.navigate(['/home']);
                console.log(error)
                return of(null);
            })
        );
    }
}