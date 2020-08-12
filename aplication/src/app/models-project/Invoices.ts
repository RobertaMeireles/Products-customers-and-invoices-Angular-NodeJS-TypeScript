import { Product } from './Product';
import { LineInvoice } from './LineInvoice';

export class Invoices {
    id?:number;
    data?:Date;
    id_cliente:number;
    cliente?:string;
    invoiceLines:LineInvoice[];

    constructor(id:number, data: Date, id_cliente:number, invoiceLines:LineInvoice[]){
        this.id = null;
        this.data = null,
        this.id_cliente = id_cliente;
        this.invoiceLines = invoiceLines
    }
}



