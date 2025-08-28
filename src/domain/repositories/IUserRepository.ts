import { User } from "../entities/User.ts";

export interface IUserRepository {
  findUserById(user_id: string): Promise<User>
}