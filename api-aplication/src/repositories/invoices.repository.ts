import { queryBuilder } from '../core/db/index'
import Invoice from './../models/Invoice'

export default class InvoicesRepository {
  // Select All Invoices
  public static async getAll (): Promise<any> {
    const invoices = []
    const invoicesBd = await queryBuilder
      .select(['facturas.*', 'clientes.nome as cliente'])
      .table('facturas')
      .innerJoin('clientes', 'clientes.id', 'facturas.id_cliente')
      .where('deletado', '=', 0)

    for (const i of invoicesBd) {
      const list = await queryBuilder
        .select(['linhas_de_factura.*', 'produtos.designacao as designacao'])
        .table('linhas_de_factura')
        .innerJoin('produtos', 'produtos.id', 'linhas_de_factura.id_produto')
        .where('linhas_de_factura.id_factura', '=', i.id)

      const x = ({ ...i, list })
      invoices.push(x)
    }
    return invoices
  }

  // Select Invoices By Id
  public static async getById (id: number): Promise<any> {
    const invoicesBd = await queryBuilder
      .select(['facturas.*', 'clientes.nome as cliente'])
      .table('facturas')
      .innerJoin('clientes', 'clientes.id', 'facturas.id_cliente')
      .where('facturas.id', '=', id)
      .where('deletado', '=', 0)
      .first()

    const invoiceLines = await queryBuilder
      .select(['linhas_de_factura.*', 'produtos.designacao as designacao'])
      .table('linhas_de_factura')
      .innerJoin('produtos', 'produtos.id', 'linhas_de_factura.id_produto')
      .where('linhas_de_factura.id_factura', '=', invoicesBd.id)

    return new Promise((resolve, reject) => {
      resolve({ ...invoicesBd, invoiceLines })
    })
  }

  // Create Invoice
  public static async add(id_cliente: number): Promise<Invoice> {
    return queryBuilder
      .insert({
        data: new Date(),
        id_cliente
      }).into('facturas')
  }

  // Create Line Invoices
  public static async addLine(id_factura: number, id_produto: number, quantidade: number, valor: number): Promise<any> {
    return queryBuilder
      .insert({
        id_factura,
        id_produto,
        quantidade,
        valor
      }).into('linhas_de_factura')
  }
}
