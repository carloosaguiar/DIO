import fs from 'fs'

export const findAllClubs = async ()=> {
    const data = fs.readFileSync('./src/data/clubs.json', {encoding: "utf-8"});
    
    const database = JSON.parse(data);
    
    return database
}