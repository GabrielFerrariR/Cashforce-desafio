import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/Orders.service';


export default class OrderController {
  constructor(private _service: OrderService){}
  async read(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const result = await this._service.read();
    res.status(StatusCodes.OK).json(result);
  }
}