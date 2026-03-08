import * as http from 'http';
import { app } from './app.ts';

const server = http.createServer(app);


const port = process.env.PORT;

server.listen(port, ()=>{

    console.log(`Servidor rodando no link: http://localhost:${port}/`);

});