import { IRetornoAdocao } from "../interfaces/IRetornoAdocao";
import { AdoptionRepository } from "../repositories/AdoptionRepository";
import { PetRepository } from "../repositories/PetRepository";
import { UserRepository } from "../repositories/UserRepository";

export class ListAdoptionsService {
    async execute() {
        const petRepository = new PetRepository();
        const userRepository = new UserRepository();
        const adoptionRepository = new AdoptionRepository();

        const listOfAdoptions = await adoptionRepository.findAll();

        const resultList: IRetornoAdocao[] = []
        await Promise.all(
            listOfAdoptions.map(async element => {
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
                    situacao: element.situacao
                });
            })
        )
        return resultList;
    }
}