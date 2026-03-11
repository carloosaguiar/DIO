import express from 'express';
import createApp from './app.ts';

const app = createApp();

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server is running in: http://localhost:${port}`);
})