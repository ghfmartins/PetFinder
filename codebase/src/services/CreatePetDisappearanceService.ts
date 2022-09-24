// Serviço de pets desaparecidos
import { DisappearanceRepository } from '../repositories/DisappearanceRepository';
export class CreatePetDisappearanceService {
  async execute(
    idPet: string,
    idUsuario: string,
    ultimo_local_de_avistamento: string,
    bairro: string,
    cidade: string) {
    const disappearanceRepository = new DisappearanceRepository();

    const petDisappearance = disappearanceRepository.addDisappearance(
      idPet,
      idUsuario,
      ultimo_local_de_avistamento,
      bairro,
      cidade);

    if (!petDisappearance) {
      throw new Error('Service: Desaparecimento não cadastrado.');
    }

    return petDisappearance;
  }
}
