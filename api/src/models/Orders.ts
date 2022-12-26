import { initModels, orders } from '../database/models/init-models';
import database from '../database/models';
import Model from '../interfaces/Model';
const { cnpjs, buyers, users, providers } = initModels(database);


//model para desacoplar o sequelize do service de pedidos
export default class Orders implements Model<orders> {
  private _includeOptions = [ {
    model: cnpjs,
    as: 'cnpj'
  },
  { 
    model: users,
    as: 'user' 
  },
  { 
    model: buyers,
    as: 'buyer' 
  },
  { 
    model: providers,
    as: 'provider' 
  },
  ];

  constructor(private _sequelizeModel= orders) {}
  async findAll():Promise<orders[]> {
    const result = await this._sequelizeModel.findAll({
      include: this._includeOptions,
      attributes: {
        exclude: ['cnpjId', 'buyerId', 'userId', 'providerId']
      }
    });
    return result;
  }
}