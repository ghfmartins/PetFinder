import { Request, Response } from 'express'
import { PetInterface } from '../interfaces/PetInterface';
import { CreatePetFindingService } from '../services/CreatePetFindingService';
import { CreatePetService } from '../services/CreatePetService';

export class CreateFindingController {
  async handler(request: Request, response: Response) {
    const createPetService = new CreatePetService();

    const {
      especie,
      raca,
      cor,
      nome,
      idade,
      sexo,
      castrado,
      vacinas,
      local_encontrado,
      bairro,
      cidade,
      urlFoto
    } = request.body;

    const idUsuario = request.user_id;

    const newPet: PetInterface = {
      especie,
      raca,
      cor,
      nome,
      idade,
      sexo,
      castrado,
      vacinas,
      urlFoto
    };

    const pet = await createPetService.execute(newPet);

    if (!pet) {
      throw new Error('Controller: Pet não cadastrado.');
    }

    const createPetFindingService = new CreatePetFindingService();
    const resultFinding = await createPetFindingService.execute(
      pet.id,
      idUsuario,
      local_encontrado,
      bairro,
      cidade);

    if (resultFinding) {
      return response.status(200).json({ resultFinding });
    }
    else {
      return response.status(500).json({ message: "Erro no cadastro de pet encontrado." });
    }
  }
}
