export default class Invoice {
    id?:number;
    data:Date;
    id_cliente: number;

    constructor (id:number, data:Date, id_cliente: number) {
      this.id = id
      this.data = data
      this.id_cliente = id_cliente
    }
}
