import { PLayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/player-repository";
import * as httpResponse from "../utils/http-response"

export const getPlayerService = async ()=>{

    const data = await PlayerRepository.findAllPlayers();

    let response = null;

    if(data){
        response = await httpResponse.Ok(data)

        return response;
    }

    return await httpResponse.NoContent();

}

export const getPlayerByIdService = async (id: number)=>{

    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if(data){
        response = await httpResponse.Ok(data)

        return response;
    }

    return await httpResponse.NoContent(); 

}

export const createPlayerService = async (player: PLayerModel)=>{
    
    if(player){

        await PlayerRepository.insertPlayer(player);

        let response = await httpResponse.Create();

        return response;
    }

    return await httpResponse.BadRequest();
}

export const deletePlayerService = async(id: number) => {
    let response = null;

    await PlayerRepository.deleteOnePlayer(id);

    response = httpResponse.Ok({message: "Deleted"});

    return response;

}

export const updatePlayerService = async(id: number, body: StatisticsModel) => {
    let response = null;

    await PlayerRepository.updateOnePlayer(id, body);

    response = httpResponse.Ok({message: "Deleted"});

    return response;

}