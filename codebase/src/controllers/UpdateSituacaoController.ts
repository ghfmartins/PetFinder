import { Request, Response } from "express"
import { UpdateSituacaoService } from "../services/UpdateSituacaoService"

export class UpdateSituacaoController {
    async handler(request: Request, response: Response) {
        const updateSituacaoService = new UpdateSituacaoService()
        const {
            id_pet,
            processo
        } = request.body

        const idUsuario = request.user_id;

        const result = await updateSituacaoService.execute(
            idUsuario,
            id_pet,
            processo
        )

        if (result) {
            response.status(200).json({ message: "Situacao alterada!" })
        } else {
            response.status(500).json({ message: "Falha na atualização" })
        }
    }
}