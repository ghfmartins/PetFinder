import { Pet } from "@prisma/client";
import { IUserRetorno } from "./IUserRetorno";

export interface IRetornoDesaparecimento {
    user: IUserRetorno,
    pet: Pet,
    ultimoLocalAvistado: string,
    bairro: string,
    cidade: string,
    situacao: string
}