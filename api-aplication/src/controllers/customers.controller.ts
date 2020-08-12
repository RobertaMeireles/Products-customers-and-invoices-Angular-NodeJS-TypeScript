import { Request, Response } from 'express'
import CustomersRepository from './../repositories/customers.repository'

class CustomersController {
  // select All Customers
  public async getAll (req: Request, res: Response): Promise<Response> {
    try {
      const customers = await CustomersRepository.getAll()
      return res.json({ customers })
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // Select Customer By ID
  public async getById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const customer = await CustomersRepository.getById(Number(id))
      return res.json({ customer })
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // Create Customer
  public async add (req: Request, res: Response): Promise<Response> {
    const deletado = 0
    const { nome, idade, morada, cod_postal } = req.body
    try {
      const customer = await CustomersRepository.add(nome, Number(idade), morada, cod_postal, Number(deletado))
      return res.status(201).json(customer)
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // Update Customer
  public async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { nome, idade, morada, cod_postal } = req.body
    try {
      const customer = await CustomersRepository.update(nome, idade, morada, cod_postal, Number(id))
      return res.status(201).json(customer)
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // delete Customer
  public async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const customer = await CustomersRepository.delete(Number(id))
      return res.status(201).json(customer)
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }
}

export default new CustomersController()
