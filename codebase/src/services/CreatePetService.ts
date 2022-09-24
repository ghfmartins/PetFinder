import { PetInterface } from '../interfaces/PetInterface';
import { PetRepository } from '../repositories/PetRepository'

export class CreatePetService {
    async execute(pet: PetInterface) {
        const petRepository = new PetRepository();

        return petRepository.addPet(pet);
    }
}