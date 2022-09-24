import { AdoptionRepository } from '../repositories/AdoptionRepository';
export class CreatePetAdoptionService {
  async execute(idPet: string, idUsuario: string) {
    const adoptionRepository = new AdoptionRepository();

    const petAdoption = adoptionRepository.addAdoption(idPet, idUsuario);

    if (!petAdoption) {
      throw new Error('Service: Adoção não cadastrada.');
    }

    return petAdoption;
  }
}