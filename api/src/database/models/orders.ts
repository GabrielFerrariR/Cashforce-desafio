import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { buyers, buyersId } from './buyers';
import type { cnpjs, cnpjsId } from './cnpjs';
import type { offers, offersId } from './offers';
import type { orderportions, orderportionsId } from './orderportions';
import type { providers, providersId } from './providers';
import type { users, usersId } from './users';

export interface ordersAttributes {
  id: number;
  orderNfId: string;
  orderNumber: string;
  orderPath?: string;
  orderFileName?: string;
  orderOriginalName?: string;
  emissionDate?: string;
  pdfFile?: string;
  emitedTo: string;
  nNf?: string;
  CTE?: string;
  value?: string;
  cnpjId?: number;
  userId?: number;
  buyerId?: number;
  providerId?: number;
  orderStatusBuyer?: string;
  orderStatusProvider?: string;
  deliveryReceipt?: string;
  cargoPackingList?: string;
  deliveryCtrc?: string;
}

export type ordersPk = "id";
export type ordersId = orders[ordersPk];
export type ordersOptionalAttributes = "id" | "orderPath" | "orderFileName" | 
"orderOriginalName" | "emissionDate" | "pdfFile" | "nNf" | "CTE" | "value" | "cnpjId" |
 "userId" | "buyerId" | "providerId" | "orderStatusBuyer" | "orderStatusProvider" | 
 "deliveryReceipt" | "cargoPackingList" | "deliveryCtrc";
export type ordersCreationAttributes = Optional<ordersAttributes, ordersOptionalAttributes>;

export class orders extends Model<ordersAttributes, ordersCreationAttributes> implements ordersAttributes {
  id!: number;
  orderNfId!: string;
  orderNumber!: string;
  orderPath?: string;
  orderFileName?: string;
  orderOriginalName?: string;
  emissionDate?: string;
  pdfFile?: string;
  emitedTo!: string;
  nNf?: string;
  CTE?: string;
  value?: string;
  cnpjId?: number;
  userId?: number;
  buyerId?: number;
  providerId?: number;
  orderStatusBuyer?: string;
  orderStatusProvider?: string;
  deliveryReceipt?: string;
  cargoPackingList?: string;
  deliveryCtrc?: string;

  // orders belongsTo buyers via buyerId
  buyer!: buyers;
  getBuyer!: Sequelize.BelongsToGetAssociationMixin<buyers>;
  setBuyer!: Sequelize.BelongsToSetAssociationMixin<buyers, buyersId>;
  createBuyer!: Sequelize.BelongsToCreateAssociationMixin<buyers>;
  // orders belongsTo cnpjs via cnpjId
  cnpj!: cnpjs;
  getCnpj!: Sequelize.BelongsToGetAssociationMixin<cnpjs>;
  setCnpj!: Sequelize.BelongsToSetAssociationMixin<cnpjs, cnpjsId>;
  createCnpj!: Sequelize.BelongsToCreateAssociationMixin<cnpjs>;
  // orders hasMany offers via orderId
  offers!: offers[];
  getOffers!: Sequelize.HasManyGetAssociationsMixin<offers>;
  setOffers!: Sequelize.HasManySetAssociationsMixin<offers, offersId>;
  addOffer!: Sequelize.HasManyAddAssociationMixin<offers, offersId>;
  addOffers!: Sequelize.HasManyAddAssociationsMixin<offers, offersId>;
  createOffer!: Sequelize.HasManyCreateAssociationMixin<offers>;
  removeOffer!: Sequelize.HasManyRemoveAssociationMixin<offers, offersId>;
  removeOffers!: Sequelize.HasManyRemoveAssociationsMixin<offers, offersId>;
  hasOffer!: Sequelize.HasManyHasAssociationMixin<offers, offersId>;
  hasOffers!: Sequelize.HasManyHasAssociationsMixin<offers, offersId>;
  countOffers!: Sequelize.HasManyCountAssociationsMixin;
  // orders hasMany orderportions via orderId
  orderportions!: orderportions[];
  getOrderportions!: Sequelize.HasManyGetAssociationsMixin<orderportions>;
  setOrderportions!: Sequelize.HasManySetAssociationsMixin<orderportions, orderportionsId>;
  addOrderportion!: Sequelize.HasManyAddAssociationMixin<orderportions, orderportionsId>;
  addOrderportions!: Sequelize.HasManyAddAssociationsMixin<orderportions, orderportionsId>;
  createOrderportion!: Sequelize.HasManyCreateAssociationMixin<orderportions>;
  removeOrderportion!: Sequelize.HasManyRemoveAssociationMixin<orderportions, orderportionsId>;
  removeOrderportions!: Sequelize.HasManyRemoveAssociationsMixin<orderportions, orderportionsId>;
  hasOrderportion!: Sequelize.HasManyHasAssociationMixin<orderportions, orderportionsId>;
  hasOrderportions!: Sequelize.HasManyHasAssociationsMixin<orderportions, orderportionsId>;
  countOrderportions!: Sequelize.HasManyCountAssociationsMixin;
  // orders belongsTo providers via providerId
  provider!: providers;
  getProvider!: Sequelize.BelongsToGetAssociationMixin<providers>;
  setProvider!: Sequelize.BelongsToSetAssociationMixin<providers, providersId>;
  createProvider!: Sequelize.BelongsToCreateAssociationMixin<providers>;
  // orders belongsTo users via userId
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof orders {
    return orders.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderNfId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "orderNfId"
    },
    orderNumber: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    orderPath: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "orderPath"
    },
    orderFileName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "orderFileName"
    },
    orderOriginalName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "orderOriginalName"
    },
    emissionDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pdfFile: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emitedTo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nNf: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CTE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cnpjs',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    buyerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'buyers',
        key: 'id'
      }
    },
    providerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'providers',
        key: 'id'
      }
    },
    orderStatusBuyer: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "0"
    },
    orderStatusProvider: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "0"
    },
    deliveryReceipt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cargoPackingList: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deliveryCtrc: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "orderNfId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderNfId" },
        ]
      },
      {
        name: "orderPath",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderPath" },
        ]
      },
      {
        name: "orderFileName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderFileName" },
        ]
      },
      {
        name: "orderOriginalName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderOriginalName" },
        ]
      },
      {
        name: "userId",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
      {
        name: "buyerId",
        using: "BTREE",
        fields: [
          { name: "buyerId" },
        ]
      },
      {
        name: "providerId",
        using: "BTREE",
        fields: [
          { name: "providerId" },
        ]
      },
      {
        name: "cnpjId",
        using: "BTREE",
        fields: [
          { name: "cnpjId" },
        ]
      },
    ]
  });
  }
}
