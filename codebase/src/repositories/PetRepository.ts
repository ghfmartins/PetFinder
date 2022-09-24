import { PrismaClient } from "@prisma/client"
import { PetInterface } from "../interfaces/PetInterface";

const prisma = new PrismaClient()
export class PetRepository {
  async addPet(newPet: PetInterface) {
    try {
      const petResult = await prisma.pet.create({
        data: {
          nome: newPet.nome,
          especie: newPet.especie,
          raca: newPet.raca,
          cor: newPet.cor,
          idade: newPet.idade,
          sexo: newPet.sexo,
          castrado: newPet.castrado,
          vacinas: newPet.vacinas,
          urlFoto: newPet.urlFoto
        }
      });

      return petResult;
    } catch (error) {
      console.log(error);
    }
  }

  async findPetById(petId: string) {
    return await prisma.pet.findFirst({
      where: {
        id: petId
      }
    });
  }

  async updatePet(idPet: string, updatedPet: PetInterface) {
    try {
      const petResult = await prisma.pet.update({
        where: {
          id: idPet
        },
        data: {
          nome: updatedPet.nome,
          especie: updatedPet.especie,
          raca: updatedPet.raca,
          cor: updatedPet.cor,
          idade: updatedPet.idade,
          sexo: updatedPet.sexo,
          castrado: updatedPet.castrado,
          vacinas: updatedPet.vacinas,
          urlFoto: updatedPet.urlFoto
        }
      });

      if (petResult) return true;
      else return false;
    } catch (error) {
      throw new Error("Falha na atualização do pet.")
    }
  }

}