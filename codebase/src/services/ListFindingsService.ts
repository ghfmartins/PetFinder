import { IRetornoAchado } from "../interfaces/IRetornoAchado";
import { FindingRepository } from "../repositories/FindingRepository";
import { PetRepository } from "../repositories/PetRepository";
import { UserRepository } from "../repositories/UserRepository";

export class ListFindingsService {
    async execute() {
        const petRepository = new PetRepository();
        const userRepository = new UserRepository();
        const findingRepository = new FindingRepository();

        const listOfFindings = await findingRepository.findAll()

        const resultList: IRetornoAchado[] = []
        await Promise.all(
            listOfFindings.map(async element => {
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
                    localEncontrado: element.local_encontrado,
                    bairro: element.bairro,
                    cidade: element.cidade,
                    situacao: element.situacao
                });
            })
        )
        return resultList;
    }
}