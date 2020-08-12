import { queryBuilder } from '../core/db/index'
import Customer from './../models/Customer'

export default class CustomersRepository {
  // select All customers
  public static async getAll (): Promise<Customer[]> {
    return queryBuilder
      .select(['clientes.*', 'cidades.cidade as cidade'])
      .table('clientes')
      .innerJoin('cidades', 'cidades.cod_postal', 'clientes.cod_postal')
      .where('deletado', '=', 0)
  }

  // select Customer by ID
  public static async getById (id: number): Promise<Customer> {
    return queryBuilder
      .select(['clientes.*', 'cidades.cidade as cidade'])
      .table('clientes')
      .innerJoin('cidades', 'cidades.cod_postal', 'clientes.cod_postal')
      .where('id', '=', id)
      .andWhere('deletado', '=', 0)
      .first()
  }

  // Create Customer
  public static async add (nome: string, idade: number, morada: string, cod_postal: string, deletado:number): Promise<Customer> {
    return queryBuilder
      .insert({
        nome,
        idade,
        morada,
        cod_postal,
        deletado
      }).into('clientes')
  }

  // Update Customer
  public static async update (nome: string, idade: number, morada: string, cod_postal: string, id: number): Promise<Customer> {
    return queryBuilder('clientes')
      .where('id', '=', id)
      .update({
        nome,
        idade,
        morada,
        cod_postal
      })
  }

  // Delete Customer
  public static async delete (id: number): Promise<Customer> {
    return queryBuilder('clientes')
      .where('id', '=', id)
      .update({
        deletado: 1
      })
  }
}
