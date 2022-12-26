import type { Sequelize } from "sequelize";
import { buyers as _buyers } from "./buyers";
import type { buyersAttributes, buyersCreationAttributes } from "./buyers";
import { cnpjs as _cnpjs } from "./cnpjs";
import type { cnpjsAttributes, cnpjsCreationAttributes } from "./cnpjs";
import { offers as _offers } from "./offers";
import type { offersAttributes, offersCreationAttributes } from "./offers";
import { orderportions as _orderportions } from "./orderportions";
import type { orderportionsAttributes, orderportionsCreationAttributes } from "./orderportions";
import { orders as _orders } from "./orders";
import type { ordersAttributes, ordersCreationAttributes } from "./orders";
import { providers as _providers } from "./providers";
import type { providersAttributes, providersCreationAttributes } from "./providers";
import { sponsors as _sponsors } from "./sponsors";
import type { sponsorsAttributes, sponsorsCreationAttributes } from "./sponsors";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  _buyers as buyers,
  _cnpjs as cnpjs,
  _offers as offers,
  _orderportions as orderportions,
  _orders as orders,
  _providers as providers,
  _sponsors as sponsors,
  _users as users,
};

export type {
  buyersAttributes,
  buyersCreationAttributes,
  cnpjsAttributes,
  cnpjsCreationAttributes,
  offersAttributes,
  offersCreationAttributes,
  orderportionsAttributes,
  orderportionsCreationAttributes,
  ordersAttributes,
  ordersCreationAttributes,
  providersAttributes,
  providersCreationAttributes,
  sponsorsAttributes,
  sponsorsCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const buyers = _buyers.initModel(sequelize);
  const cnpjs = _cnpjs.initModel(sequelize);
  const offers = _offers.initModel(sequelize);
  const orderportions = _orderportions.initModel(sequelize);
  const orders = _orders.initModel(sequelize);
  const providers = _providers.initModel(sequelize);
  const sponsors = _sponsors.initModel(sequelize);
  const users = _users.initModel(sequelize);

  orders.belongsTo(buyers, { as: "buyer", foreignKey: "buyerId"});
  buyers.hasMany(orders, { as: "orders", foreignKey: "buyerId"});
  buyers.belongsTo(cnpjs, { as: "cnpj", foreignKey: "cnpjId"});
  cnpjs.hasMany(buyers, { as: "buyers", foreignKey: "cnpjId"});
  orders.belongsTo(cnpjs, { as: "cnpj", foreignKey: "cnpjId"});
  cnpjs.hasMany(orders, { as: "orders", foreignKey: "cnpjId"});
  providers.belongsTo(cnpjs, { as: "cnpj", foreignKey: "cnpjId"});
  cnpjs.hasMany(providers, { as: "providers", foreignKey: "cnpjId"});
  sponsors.belongsTo(cnpjs, { as: "cnpj", foreignKey: "cnpjId"});
  cnpjs.hasMany(sponsors, { as: "sponsors", foreignKey: "cnpjId"});
  offers.belongsTo(orders, { as: "order", foreignKey: "orderId"});
  orders.hasMany(offers, { as: "offers", foreignKey: "orderId"});
  orderportions.belongsTo(orders, { as: "order", foreignKey: "orderId"});
  orders.hasMany(orderportions, { as: "orderportions", foreignKey: "orderId"});
  orders.belongsTo(providers, { as: "provider", foreignKey: "providerId"});
  providers.hasMany(orders, { as: "orders", foreignKey: "providerId"});
  offers.belongsTo(sponsors, { as: "sponsor", foreignKey: "sponsorId"});
  sponsors.hasMany(offers, { as: "offers", foreignKey: "sponsorId"});
  orders.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(orders, { as: "orders", foreignKey: "userId"});

  return {
    buyers: buyers,
    cnpjs: cnpjs,
    offers: offers,
    orderportions: orderportions,
    orders: orders,
    providers: providers,
    sponsors: sponsors,
    users: users,
  };
}
