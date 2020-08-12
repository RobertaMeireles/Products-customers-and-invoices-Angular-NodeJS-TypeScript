import { Request, Response } from 'express'
import InvoicesRepository from './../repositories/invoices.repository'
import ProductRepository from './../repositories/products.repository'

class InvoicesController {
  // Select All Invoices
  public async getAll (req: Request, res: Response): Promise<Response> {
    try {
      const invoices = await InvoicesRepository.getAll()
      return res.json({ invoices })
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // Select Invoice By Id
  public async getById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const invoice = await InvoicesRepository.getById(Number(id))
      return res.json({ invoice })
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // Create Invoices
  public async add (req:Request, res: Response): Promise<Response> {
    const { id_cliente, invoiceLines } = req.body
    try {
      const invoice = await InvoicesRepository.add(Number(id_cliente))
      const products = await ProductRepository.getAll()

      for (const line of invoiceLines) {
        const valueProduct = products.find(p => p.id === line.id_produto).preco
        const totalPrice = Number(valueProduct) * Number(line.quantidade)
        await InvoicesRepository.addLine(Number(invoice), Number(line.id_produto), Number(line.quantidade), totalPrice)
      }
      const invoiceResult = await InvoicesRepository.getById(Number(invoice))
      console.log(invoiceResult)
      return res.status(201).json(invoiceResult)
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }
}

export default new InvoicesController()
