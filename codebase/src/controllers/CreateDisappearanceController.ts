import { Request, Response } from 'express'
import { PetInterface } from '../interfaces/PetInterface';
import { CreatePetDisappearanceService } from '../services/CreatePetDisappearanceService';
import { CreatePetService } from '../services/CreatePetService';

export class CreateDisappearanceController {
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
      ultimo_local_de_avistamento,
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

    const createPetDisappearanceService = new CreatePetDisappearanceService();
    const resultDisappearance = await createPetDisappearanceService.execute(
      pet!.id,
      idUsuario,
      ultimo_local_de_avistamento,
      bairro,
      cidade);

    if (resultDisappearance) {
      return response.status(200).json({ resultDisappearance });
    }
    else {
      return response.status(500).json({ message: "Erro no cadastro de desaparecimento." });
    }
  }
}
