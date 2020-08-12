import { createHash } from 'crypto'
import User from './../models/User'
import { queryBuilder } from './../core/db'
import { sign } from 'jsonwebtoken'

export default class AuthRepository {
  // Login
  public static async attemptLogin (email: string, password: string): Promise<string> {
    password = createHash('sha256').update(password).digest('hex')
    const user: User = await queryBuilder
      .select()
      .from('utilizadores')
      .where('email', '=', email)
      .andWhere('password', '=', password)
      .first()

    return new Promise((resolve, reject) => {
      if (user) {
        const token = sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 31),
          email: user.email,
          id: user.id,
          nome: user.nome
        }, 'MyVerySecretKeyForThisToken')
        resolve(token)
      }
      reject(new Error('Bad credentials'))
    })
  }

  // SignUp
  public static async signUp (email: string, password: string, nome:string): Promise<number[]> {
    password = createHash('sha256').update(password).digest('hex')
    return queryBuilder.insert({
      email,
      password,
      nome
    }).into('utilizadores')
  }
}
