import { Request, Response } from "express";
import { PetInterface } from "../interfaces/PetInterface";
import { UpdatePetService } from "../services/UpdatePetService";

export class UpdatePetController {
    async handler(request: Request, response: Response) {
        const {
            id_pet,
            processo,
            especie,
            raca,
            cor,
            nome,
            idade,
            sexo,
            castrado,
            vacinas,
            urlFoto
        } = request.body

        const idUsuario = request.user_id;

        const updatedPet: PetInterface = {
            especie,
            raca,
            cor,
            nome,
            idade,
            sexo,
            castrado,
            vacinas,
            urlFoto
        };

        const updatePetService = new UpdatePetService()

        const result = await updatePetService.execute(idUsuario, id_pet, processo, updatedPet);

        if (result) {
            response.status(200).json({ message: "Pet atualizado!" })
        } else {
            response.status(500).json({ message: "Falha na atualização" })
        }

    }
}