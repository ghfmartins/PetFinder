import { IRetornoDesaparecimento } from "../interfaces/IRetornoDesaparecimento";
import { DisappearanceRepository } from "../repositories/DisappearanceRepository";
import { PetRepository } from "../repositories/PetRepository";
import { UserRepository } from "../repositories/UserRepository";

export class ListDesappearancesService {
    async execute() {
        const petRepository = new PetRepository();
        const userRepository = new UserRepository();
        const disappearanceRepository = new DisappearanceRepository();

        const listOfDisappearance = await disappearanceRepository.findAll()

        const resultList: IRetornoDesaparecimento[] = []
        await Promise.all(
            listOfDisappearance.map(async element => {
                const petResult = await petRepository.findPetById(element.pet_id);
                const userResult = await userRepository.findUserById(element.user_id);

                resultList.push({
                    user: {
                        name: userResult!.name,
                        email: userResult!.email,
                        logradouro: userResult!.logradouro,
                        numero: userResult!.numero,
                        complemento: userResult!.complemento,
                        bairro: userResult!.bairro,
                        cidade: userResult!.cidade,
                        estado: userResult!.estado,
                        telefone: userResult!.telefone,
                        CEP: userResult!.CEP
                    },
                    pet: petResult!,
                    ultimoLocalAvistado: element.ultimo_local_de_avistamento,
                    bairro: element.bairro,
                    cidade: element.cidade,
                    situacao: element.situacao
                });
            })
        )
        return resultList;
    }
}