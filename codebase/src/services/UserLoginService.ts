import { UserRepository } from '../repositories/UserRepository'
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export class UserLoginService {
  async execute(email: string, password: string) {
    const userRepository = new UserRepository();
    const isInUse = await userRepository.emailIsInUse(email);

    if (isInUse) {
      const user = await userRepository.getUserByEmail(email);

      if (!user) {
        throw new Error('E-mail ou senha incorretos.');
      }

      // const passHash = user.senha ? user.senha : '';
      const isValid = await compare(password, user.senha!);

      if (!isValid) {
        throw new Error('E-mail ou senha incorretos.');
      }

      const token = sign({
        email: user.email
      },
        "fba0c363fb347d4859c5ea379ee46569",
        {
          subject: user.id,
          expiresIn: "1d"
        }
      );

      return token;
    }
  }
}