import { PrismaClient } from "@prisma/client"
import { EnumSituacao } from "../enum/EnumSituacao";

const prisma = new PrismaClient()

export class DisappearanceRepository {
  async addDisappearance(
    idPet: string,
    idUsuario: string,
    ultimo_local_de_avistamento: string,
    bairro: string,
    cidade: string) {
    try {
      const petDisappearance = await prisma.desaparecimento.create({
        data: {
          pet_id: idPet,
          user_id: idUsuario,
          ultimo_local_de_avistamento: ultimo_local_de_avistamento,
          bairro: bairro,
          cidade: cidade,
          situacao: EnumSituacao[EnumSituacao.Ativo]
        }
      });

      return petDisappearance;
    } catch (error) {
      throw new Error('Repository: Desaparecimento não cadastrado');
    }
  }

  async findAll() {
    return await prisma.desaparecimento.findMany()
  }

  async findOne(idUsuario: string, idPet: string) {
    const result = await prisma.desaparecimento.findUnique({
      where: {
        user_id_pet_id: {
          user_id: idUsuario,
          pet_id: idPet
        }
      },
    })

    if (result == null) {
      throw new Error("Não foi encontrada nenhuma desaparecimento com esses parâmetros.")
    }
    return result;
  }

  async updateSitucao(idUsuario: string, idPet: string, situacao: EnumSituacao) {
    try {
      const result = await prisma.desaparecimento.update({
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
      throw new Error('Repository>Desaparecimento: Atualizacao nao realizada');
    }
  }
}