import { Request, Response } from "express";
import { ListAdoptionsService } from "../services/ListAdoptionsService";

export class ListAdptionsController {
    async handler(request: Request, response: Response) {
        const listAdoptionsService = new ListAdoptionsService();

        const result = await listAdoptionsService.execute()

        if (result) {
            response.status(200).json(result)
        } else {
            response.status(500).json({ message: "Nenhum resultado encontrado" })
        }
    }
}