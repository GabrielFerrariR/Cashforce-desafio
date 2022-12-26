import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { buyers, buyersId } from './buyers';
import type { orders, ordersId } from './orders';
import type { providers, providersId } from './providers';
import type { sponsors, sponsorsId } from './sponsors';

export interface cnpjsAttributes {
  id: number;
  cnpj: string;
  companyType: string;
}

export type cnpjsPk = 'id';
export type cnpjsId = cnpjs[cnpjsPk];
export type cnpjsOptionalAttributes = 'id';
export type cnpjsCreationAttributes = Optional<cnpjsAttributes, cnpjsOptionalAttributes>;

export class cnpjs extends Model<cnpjsAttributes, cnpjsCreationAttributes> implements cnpjsAttributes {
  id!: number;
  cnpj!: string;
  companyType!: string;
  createdAt!: Date;
  updatedAt!: Date;

  // cnpjs hasMany buyers via cnpjId
  buyers!: buyers[];
  getBuyers!: Sequelize.HasManyGetAssociationsMixin<buyers>;
  setBuyers!: Sequelize.HasManySetAssociationsMixin<buyers, buyersId>;
  addBuyer!: Sequelize.HasManyAddAssociationMixin<buyers, buyersId>;
  addBuyers!: Sequelize.HasManyAddAssociationsMixin<buyers, buyersId>;
  createBuyer!: Sequelize.HasManyCreateAssociationMixin<buyers>;
  removeBuyer!: Sequelize.HasManyRemoveAssociationMixin<buyers, buyersId>;
  removeBuyers!: Sequelize.HasManyRemoveAssociationsMixin<buyers, buyersId>;
  hasBuyer!: Sequelize.HasManyHasAssociationMixin<buyers, buyersId>;
  hasBuyers!: Sequelize.HasManyHasAssociationsMixin<buyers, buyersId>;
  countBuyers!: Sequelize.HasManyCountAssociationsMixin;
  // cnpjs hasMany orders via cnpjId
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
  // cnpjs hasMany providers via cnpjId
  providers!: providers[];
  getProviders!: Sequelize.HasManyGetAssociationsMixin<providers>;
  setProviders!: Sequelize.HasManySetAssociationsMixin<providers, providersId>;
  addProvider!: Sequelize.HasManyAddAssociationMixin<providers, providersId>;
  addProviders!: Sequelize.HasManyAddAssociationsMixin<providers, providersId>;
  createProvider!: Sequelize.HasManyCreateAssociationMixin<providers>;
  removeProvider!: Sequelize.HasManyRemoveAssociationMixin<providers, providersId>;
  removeProviders!: Sequelize.HasManyRemoveAssociationsMixin<providers, providersId>;
  hasProvider!: Sequelize.HasManyHasAssociationMixin<providers, providersId>;
  hasProviders!: Sequelize.HasManyHasAssociationsMixin<providers, providersId>;
  countProviders!: Sequelize.HasManyCountAssociationsMixin;
  // cnpjs hasMany sponsors via cnpjId
  sponsors!: sponsors[];
  getSponsors!: Sequelize.HasManyGetAssociationsMixin<sponsors>;
  setSponsors!: Sequelize.HasManySetAssociationsMixin<sponsors, sponsorsId>;
  addSponsor!: Sequelize.HasManyAddAssociationMixin<sponsors, sponsorsId>;
  addSponsors!: Sequelize.HasManyAddAssociationsMixin<sponsors, sponsorsId>;
  createSponsor!: Sequelize.HasManyCreateAssociationMixin<sponsors>;
  removeSponsor!: Sequelize.HasManyRemoveAssociationMixin<sponsors, sponsorsId>;
  removeSponsors!: Sequelize.HasManyRemoveAssociationsMixin<sponsors, sponsorsId>;
  hasSponsor!: Sequelize.HasManyHasAssociationMixin<sponsors, sponsorsId>;
  hasSponsors!: Sequelize.HasManyHasAssociationsMixin<sponsors, sponsorsId>;
  countSponsors!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof cnpjs {
    return cnpjs.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cnpj: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: 'cnpj'
      },
      companyType: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
    }, {
      sequelize,
      tableName: 'cnpjs',
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
          name: 'cnpj',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'cnpj' },
          ]
        },
      ]
    });
  }
}
