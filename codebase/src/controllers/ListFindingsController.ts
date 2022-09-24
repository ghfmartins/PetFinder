import { Request, Response } from "express";
import { ListFindingsService } from "../services/ListFindingsService";

export class ListFindingsController {
    async handler(request: Request, response: Response) {
        const listFindingsService = new ListFindingsService()

        const result = await listFindingsService.execute()

        if (result) {
            response.status(200).json(result)
        } else {
            response.status(500).json({ message: "Nenhum resultado encontrado" })
        }
    }
}