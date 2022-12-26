import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import OrdersRoute from './Routes/Orders.route';

class App {
  server;
  constructor() {
    this.server = express();
    this.middleWares();
    this.routes();
  }

  middleWares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use('/orders', OrdersRoute);
  }
}

export default new App().server;

