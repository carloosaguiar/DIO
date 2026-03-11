import {Request, Response} from "express";
import { getClubService } from "../services/club-service";

export const getClubs = async(req: Request, res: Response)=>{
    const httpResponse = await getClubService();
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
}