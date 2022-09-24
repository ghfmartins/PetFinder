import { Pet } from "@prisma/client";
import { IUserRetorno } from "./IUserRetorno";

export interface IRetornoAdocao {
    user: IUserRetorno,
    pet: Pet,
    situacao: string
}