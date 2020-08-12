import { Request, Response } from 'express'
import ProductsRepository from './../repositories/products.repository'

class ProductsController {
  // select All Products
  public async getAll (req:Request, res: Response): Promise<Response> {
    try {
      const products = await ProductsRepository.getAll()
      return res.json({ products })
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // select Product by ID
  public async getById (req:Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const product = await ProductsRepository.getById(Number(id))
      return res.json({ product })
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // create Product
  public async add (req:Request, res:Response): Promise<Response> {
    const deletado = 0
    const { designacao, descricao, preco, id_categoria } = req.body
    try {
      const product = await ProductsRepository.add(designacao, descricao, Number(preco), Number(id_categoria), Number(deletado))
      return res.status(201).json(product)
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // update Product
  public async update (req:Request, res:Response): Promise<Response> {
    const { id } = req.params
    const { designacao, descricao, preco, id_categoria } = req.body
    try {
      const product = await ProductsRepository.update(designacao, descricao, Number(preco), Number(id_categoria), Number(id))
      return res.status(201).json(product)
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // Delete Product
  public async delete (req:Request, res:Response): Promise<Response> {
    const { id } = req.params
    try {
      const product = await ProductsRepository.delete(Number(id))
      return res.status(201).json(product)
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }
}

export default new ProductsController()
