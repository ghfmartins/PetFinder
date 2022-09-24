import { Request, Response } from 'express'
import { UserLoginService } from '../services/UserLoginService';

export class CreateLoginController {
  async handler(request: Request, response: Response) {
    const {
      email,
      senha
    } = request.body;

    const userLoginService = new UserLoginService();

    const token = await userLoginService.execute(email, senha);

    return response.json(token);
  }
}