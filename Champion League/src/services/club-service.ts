import { findAllClubs } from "../repositories/clubs-repository";
import { NoContent, Ok } from "../utils/http-response";

export const getClubService = async ()=> {
    const data = await findAllClubs();
    
    let response = null;
    
    if(data){
        response = await Ok(data)
    
        return response;
    }
    
    return await NoContent();
}