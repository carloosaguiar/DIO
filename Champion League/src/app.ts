import express from 'express';
import router from './routes/routes.ts';
import cors from 'cors';

function createApp(){

    const app = express();

    app.use(express.json());

    const corsOptions = {
        origin: 'http://carlos.aguiar.com'
    };

    app.use(cors(corsOptions));

    app.use("/api", router)

    return app;
}

export default createApp;