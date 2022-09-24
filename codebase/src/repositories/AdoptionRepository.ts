import { PrismaClient } from "@prisma/client"
import { EnumSituacao } from "../enum/EnumSituacao";

const prisma = new PrismaClient()

export class AdoptionRepository {
  async addAdoption(idPet: string, idUsuario: string) {
    try {
      const petAdoption = await prisma.adocao.create({
        data: {
          pet_id: idPet,
          user_id: idUsuario,
          situacao: EnumSituacao[EnumSituacao.Ativo]
        }
      });

      return petAdoption;
    } catch (error) {
      throw new Error('Repository: Adocao: Adoção não cadastrada');
    }
  }

  async findAll() {
    return await prisma.adocao.findMany();
  }

  async findOne(idUsuario: string, idPet: string) {
    const result = await prisma.adocao.findUnique({
      where: {
        user_id_pet_id: {
          user_id: idUsuario,
          pet_id: idPet
        }
      },
    })

    if (result == null) {
      throw new Error("Não foi encontrada nenhuma adoção com esses parâmetros.")
    }
    return result;
  }

  async updateSitucao(idUsuario: string, idPet: string, situacao: EnumSituacao) {
    try {
      const result = await prisma.adocao.update({
        where: {
          user_id_pet_id: {
            user_id: idUsuario,
            pet_id: idPet
          }
        },
        data: {
          situacao: EnumSituacao[situacao]
        }
      })

      if (result) return true;
      return false;

    } catch (error) {
      throw new Error('Repository>Adocao: Atualizacao nao realizada');
    }
  }
}