import { PrismaClient } from "@prisma/client"
import { UserInterface } from "../interfaces/UserInterface";

const prisma = new PrismaClient()

export class UserRepository {
  async addUser(user: UserInterface) {
    try {
      const userResult = await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          senha: user.senha,
          logradouro: user.logradouro,
          numero: user.numero,
          complemento: user.complemento,
          bairro: user.bairro,
          cidade: user.cidade,
          estado: user.estado,
          telefone: user.telefone,
          CEP: user.CEP
        }
      });

      return userResult;
    } catch (error) {
      console.log(error);
    }
  }

  async emailIsInUse(userEmail: string) {
    try {
      const result = await prisma.user.findFirst({
        where: {
          email: userEmail
        }
      });

      if (result) return true;
      return false;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserByEmail(userEmail: string) {
    try {
      const userResult = await prisma.user.findFirst({
        where: {
          email: userEmail
        }
      });

      return userResult;
    } catch (error) {
      console.log(error);
    }
  }

  async findUserById(userId: string) {
    return await prisma.user.findFirst({
      where: {
        id: userId
      }
    })
  }
}