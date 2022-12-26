import Orders from '../models/Orders';

export default class OrderService {
  constructor(private _model: Orders ){}
  async read() {
    const result = await this._model.findAll();
    return result;
  }
}