import { PrismaClient } from "@prisma/client"
import { EnumSituacao } from "../enum/EnumSituacao";

const prisma = new PrismaClient()

export class FindingRepository {
  async addFinding(
    idPet: string,
    idUsuario: string,
    local_encontrado: string,
    bairro: string,
    cidade: string) {
    try {
      const petFinding = await prisma.achado.create({
        data: {
          pet_id: idPet,
          user_id: idUsuario,
          local_encontrado: local_encontrado,
          bairro: bairro,
          cidade: cidade,
          situacao: EnumSituacao[EnumSituacao.Ativo]
        }
      });

      return petFinding;
    } catch (error) {
      throw new Error('Repository: pet encontrado não cadastrado');
    }
  }

  async findAll() {
    return await prisma.achado.findMany();
  }

  async findOne(idUsuario: string, idPet: string) {
    const result = await prisma.achado.findUnique({
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
      const result = await prisma.achado.update({
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
      throw new Error('Repository>Achado: Atualizacao nao realizada');
    }
  }
}