import { Request, Response } from "express";
import { ListDesappearancesService } from "../services/ListDesappearancesService";


export class ListDisappearancesController {
    async handler(request: Request, response: Response) {

        const listDesappearancesServices = new ListDesappearancesService()

        const result = await listDesappearancesServices.execute()

        if (result) {
            response.status(200).json(result)
        } else {
            response.status(500).json({ message: "Nenhum resultado encontrado" })
        }
    }
}