import express from 'express';
import 'express-async-errors';
import cors from 'cors';

class App {
  server;
  constructor() {
    this.server = express();
    this.middleWares();
    // this.routes();
    this.server.get('/', (req, res, _next) => {
      res.status(200).json({ message: 'teste de rota'}); 
    });
  }

  middleWares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    throw Error('Not implemented');
  }
}

export default new App().server;

