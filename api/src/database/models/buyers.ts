import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { cnpjs, cnpjsId } from './cnpjs';
import type { orders, ordersId } from './orders';

export interface buyersAttributes {
  id: number;
  name: string;
  tradingName?: string;
  cashforceTax?: string;
  responsibleName?: string;
  responsibleEmail?: string;
  responsiblePosition?: string;
  responsiblePhone?: string;
  responsibleMobile?: string;
  website?: string;
  postalCode?: string;
  address?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  phoneNumber?: string;
  situation?: string;
  situationDate?: string;
  cnpjId?: number;
  confirm?: number;
  email?: string;
}

export type buyersPk = 'id';
export type buyersId = buyers[buyersPk];
export type buyersOptionalAttributes = 'id' | 'tradingName' | 'cashforceTax' |
 'responsibleName' | 'responsibleEmail' | 'responsiblePosition' | 'responsiblePhone' | 
 'responsibleMobile' | 'website' | 'postalCode' | 'address' | 'number' | 'complement' | 
 'neighborhood' | 'city' | 'state' | 'phoneNumber' | 'situation' | 'situationDate' |  'cnpjId' | 'confirm' | 'email';
export type buyersCreationAttributes = Optional<buyersAttributes, buyersOptionalAttributes>;

export class buyers extends 
  Model<buyersAttributes, buyersCreationAttributes> implements buyersAttributes {
  id!: number;
  name!: string;
  tradingName?: string;
  cashforceTax?: string;
  responsibleName?: string;
  responsibleEmail?: string;
  responsiblePosition?: string;
  responsiblePhone?: string;
  responsibleMobile?: string;
  website?: string;
  postalCode?: string;
  address?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  phoneNumber?: string;
  situation?: string;
  situationDate?: string;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId?: number;
  confirm?: number;
  email?: string;

  // buyers hasMany orders via buyerId
  orders!: orders[];
  getOrders!: Sequelize.HasManyGetAssociationsMixin<orders>;
  setOrders!: Sequelize.HasManySetAssociationsMixin<orders, ordersId>;
  addOrder!: Sequelize.HasManyAddAssociationMixin<orders, ordersId>;
  addOrders!: Sequelize.HasManyAddAssociationsMixin<orders, ordersId>;
  createOrder!: Sequelize.HasManyCreateAssociationMixin<orders>;
  removeOrder!: Sequelize.HasManyRemoveAssociationMixin<orders, ordersId>;
  removeOrders!: Sequelize.HasManyRemoveAssociationsMixin<orders, ordersId>;
  hasOrder!: Sequelize.HasManyHasAssociationMixin<orders, ordersId>;
  hasOrders!: Sequelize.HasManyHasAssociationsMixin<orders, ordersId>;
  countOrders!: Sequelize.HasManyCountAssociationsMixin;
  // buyers belongsTo cnpjs via cnpjId
  cnpj!: cnpjs;
  getCnpj!: Sequelize.BelongsToGetAssociationMixin<cnpjs>;
  setCnpj!: Sequelize.BelongsToSetAssociationMixin<cnpjs, cnpjsId>;
  createCnpj!: Sequelize.BelongsToCreateAssociationMixin<cnpjs>;

  static initModel(sequelize: Sequelize.Sequelize): typeof buyers {
    return buyers.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      tradingName: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      cashforceTax: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      responsibleName: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      responsibleEmail: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      responsiblePosition: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      responsiblePhone: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      responsibleMobile: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      website: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      postalCode: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      number: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      complement: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      neighborhood: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      city: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      state: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      phoneNumber: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      situation: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      situationDate: {
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
      confirm: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 1
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
    }, {
      sequelize,
      tableName: 'buyers',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' },
          ]
        },
        {
          name: 'cnpjId',
          using: 'BTREE',
          fields: [
            { name: 'cnpjId' },
          ]
        },
      ]
    });
  }
}
