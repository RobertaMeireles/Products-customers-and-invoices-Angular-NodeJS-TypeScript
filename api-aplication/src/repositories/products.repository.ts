import { queryBuilder } from '../core/db/index'
import Product from './../models/Product'

export default class ProductRepository {
// Select All Products
  public static async getAll (): Promise<Product[]> {
    return queryBuilder
      .select(['produtos.*', 'categorias.designacao as Designacao'])
      .table('produtos')
      .innerJoin('categorias', 'categorias.id', 'produtos.id_categoria')
      .where('deletado', '=', 0)
  }

  // Select Product by ID
  public static async getById (id: number): Promise<Product> {
    return queryBuilder
      .select(['produtos.*', 'categorias.designacao as Designacao'])
      .table('produtos')
      .innerJoin('categorias', 'categorias.id', 'produtos.id_categoria')
      .where('produtos.id', '=', id)
      .andWhere('deletado', '=', 0)
      .first()
  }

  // Create Product
  public static async add (designacao: string, descricao: string, preco: number, id_categoria: number, deletado:number):Promise<Product> {
    return queryBuilder
      .insert({
        designacao,
        descricao,
        preco,
        id_categoria,
        deletado
      }).into('produtos')
  }

  // Update Product
  public static async update (designacao: string, descricao: string, preco: number, id_categoria: number, id: number):Promise<Product> {
    return queryBuilder('produtos')
      .where('id', '=', id)
      .update({
        designacao,
        descricao,
        preco,
        id_categoria
      })
  }

  // Delete Product
  public static async delete (id:number): Promise<Product> {
    return queryBuilder('produtos')
      .where('id', '=', id)
      .update({
        deletado: 1
      })
  }
}
