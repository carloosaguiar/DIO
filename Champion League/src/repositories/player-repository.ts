import { PLayerModel } from "../models/player-model";
import fs from "fs";
import { StatisticsModel } from "../models/statistics-model";

const database_src = "./src/data/players.json";

export const findAllPlayers = async (): Promise<PLayerModel[]> =>{

  const data = fs.readFileSync(database_src, {encoding: "utf-8"});

  const database: PLayerModel[] = JSON.parse(data);

  return database
}

export const findPlayerById = async (id: number): Promise<PLayerModel | undefined> =>{

  const data = fs.readFileSync(database_src, {encoding: "utf-8"});

  const database: PLayerModel[] = JSON.parse(data);

  return database.find((player) => player.id === id);

}

export const insertPlayer = async(player: PLayerModel) =>{

  const data = fs.readFileSync(database_src, {encoding: "utf-8"});

  const database: PLayerModel[] = JSON.parse(data);

  player = Object.assign({id: database.length + 1}, player)

  database.push(player)

  const json = JSON.stringify(database);

  fs.writeFileSync(database_src, json, "utf-8")
}

export const deleteOnePlayer = async(id:number) =>{
  const data = fs.readFileSync(database_src, {encoding: "utf-8"});

  let database: PLayerModel[] = JSON.parse(data);

  database = database.filter(player => player.id !== id);

  const json = JSON.stringify(database);

  fs.writeFileSync(database_src, json, "utf-8");
}

export const updateOnePlayer = async(id:number, body: StatisticsModel) =>{
  const data = fs.readFileSync(database_src, {encoding: "utf-8"});

  const database: PLayerModel[] = JSON.parse(data);

  let index = database.findIndex(player => player.id === id);

  database[index].statistics = body;

  const json = JSON.stringify(database);

  fs.writeFileSync(database_src, json, "utf-8");
}