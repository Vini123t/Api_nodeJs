import express, {} from 'express';


const Server = express();

Server.get('/', (req, res) =>{
    return res.send('Ola, Dev!');
});



export { Server };
 

