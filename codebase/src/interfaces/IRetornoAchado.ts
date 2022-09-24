import { Pet } from "@prisma/client";
import { IUserRetorno } from "./IUserRetorno";

export interface IRetornoAchado {
    user: IUserRetorno,
    pet: Pet,
    localEncontrado: string,
    bairro: string,
    cidade: string,
    situacao: string
}