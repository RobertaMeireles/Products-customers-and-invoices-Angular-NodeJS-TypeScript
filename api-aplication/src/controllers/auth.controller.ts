import { Request, Response } from 'express'
import AuthRepository from './../repositories/auth.repository'
import { UsersRepository } from './../repositories/users.repository'

class AuthController {
  // Login
  public async login (req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body
      const token = await AuthRepository.attemptLogin(email, password)
      const user = await UsersRepository.getByEmail(email)
      return res.json({ token, user })
    } catch (err) {
      return res.status(401).json({
        message: 'Bad credentials',
        error: err.message
      })
    }
  }

  // SignUp
  public async signUp (req: Request, res: Response): Promise<Response> {
    try {
      const { email, password, nome } = req.body
      const [userId] = await AuthRepository.signUp(email, password, nome)

      if (userId > 0) {
        const token = await AuthRepository.attemptLogin(email, password)
        return res.json({ token })
      }
      return res.status(400).json()
    } catch (err) {
      return res.status(401).json({
        message: 'Bad Request',
        error: err.message
      })
    }
  }
}

export default new AuthController()
