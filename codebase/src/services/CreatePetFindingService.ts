// Serviço de pets encontrados
import { FindingRepository } from '../repositories/FindingRepository';
export class CreatePetFindingService {
  async execute(
    idPet: string,
    idUsuario: string,
    local_encontrado: string,
    bairro: string,
    cidade: string) {
    const findingRepository = new FindingRepository();

    const petFinding = findingRepository.addFinding(
      idPet,
      idUsuario,
      local_encontrado,
      bairro,
      cidade);

    if (!petFinding) {
      throw new Error('Service: pet encontrado não cadastrado.');
    }

    return petFinding;
  }
}