import { Request, Response } from 'express'
import UsersRepository from '../repositories/users.repository'

export class UserController {
  // User by id
  public async getById (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = res.locals.decodedToken
      const user = await UsersRepository.getById(Number(id))
      return res.json({ user })
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }
}
