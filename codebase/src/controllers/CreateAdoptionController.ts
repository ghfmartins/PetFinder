import { Request, Response } from 'express'
import { PetInterface } from '../interfaces/PetInterface';
import { CreatePetAdoptionService } from '../services/CreatePetAdoptionService';
import { CreatePetService } from '../services/CreatePetService';

export class CreateAdoptionController {

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

    const createPetAdoptionService = new CreatePetAdoptionService();
    const resultAdoption = await createPetAdoptionService.execute(pet.id, idUsuario);

    if (resultAdoption) {
      return response.status(200).json({ resultAdoption });
    }
    else {
      return response.status(500).json({ message: "Erro no cadastro de adoção." });
    }
  }
}
