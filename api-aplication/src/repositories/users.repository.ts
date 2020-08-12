import { queryBuilder } from '../core/db/index'
import User from './../models/User'

export class UsersRepository {
  // user by id
  public static async getById (userId: number): Promise<User> {
    return queryBuilder
      .select()
      .from('utilizadores')
      .where('id', '=', userId)
      .first()
  }

  // user by email
  public static async getByEmail (email: string): Promise<User> {
    return queryBuilder
      .select()
      .from('utilizadores')
      .where('email', '=', email)
      .first()
  }
}
