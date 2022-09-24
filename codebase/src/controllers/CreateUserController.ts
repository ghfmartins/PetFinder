import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController {
  async handler(request: Request, response: Response) {
    const {
      name,
      email,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      senha,
      telefone,
      CEP } = request.body;

    const newUser = {
      name,
      email,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      senha,
      telefone,
      CEP
    };

    const createUserService = new CreateUserService();
    const resultCadastro = await createUserService.execute(newUser);

    if (resultCadastro) {
      return response.status(200).json({ resultCadastro });
    }
    else {
      return response.status(500).json({ message: "Erro no cadastro de usuário." });
    }
  }
}