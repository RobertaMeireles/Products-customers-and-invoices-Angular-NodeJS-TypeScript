export class LineInvoice {
    id_produto: number;
    quantidade: number;

    constructor(id_produto: number, quantidade: number) {
        this.id_produto = id_produto,
        this.quantidade = quantidade
    }
}