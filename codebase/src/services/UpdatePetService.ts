import { EnumTipoDeProcesso } from "../enum/EnumTipoDeProcesso";
import { PetInterface } from "../interfaces/PetInterface";
import { AdoptionRepository } from "../repositories/AdoptionRepository";
import { DisappearanceRepository } from "../repositories/DisappearanceRepository";
import { FindingRepository } from "../repositories/FindingRepository";
import { PetRepository } from "../repositories/PetRepository";

export class UpdatePetService {
    async execute(idUsuario: string, idPet: string, tipoDeProcesso: string, pet: PetInterface) {
        const petRepository = new PetRepository();

        switch (tipoDeProcesso) {
            case EnumTipoDeProcesso[EnumTipoDeProcesso.Adocao]:
                const adoptionRepository = new AdoptionRepository();

                await adoptionRepository.findOne(idUsuario, idPet);

                return await petRepository.updatePet(idPet, pet);

            case EnumTipoDeProcesso[EnumTipoDeProcesso.Desaparecido]:
                const disappearanceRepository = new DisappearanceRepository();

                await disappearanceRepository.findOne(idUsuario, idPet)

                return await petRepository.updatePet(idPet, pet);

            case EnumTipoDeProcesso[EnumTipoDeProcesso.Achado]:
                const findingRepository = new FindingRepository();

                await findingRepository.findOne(idUsuario, idPet)

                return await petRepository.updatePet(idPet, pet);

            default:
                throw new Error("Nenhum tipo de processo informado.")
        }
    }
}