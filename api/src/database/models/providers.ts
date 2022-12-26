import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { cnpjs, cnpjsId } from './cnpjs';
import type { orders, ordersId } from './orders';

export interface providersAttributes {
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
  bank?: string;
  bankAgency?: string;
  account?: string;
  documents?: string;
  phoneNumber?: string;
  situation?: string;
  situationDate?: string;
  cnpjId?: number;
  email?: string;
}

export type providersPk = "id";
export type providersId = providers[providersPk];
export type providersOptionalAttributes = "id" | "tradingName" | "cashforceTax" | "responsibleName" | "responsibleEmail" | "responsiblePosition" | "responsiblePhone" | "responsibleMobile" | "website" | "postalCode" | "address" | "number" | "complement" | "neighborhood" | "city" | "state" | "bank" | "bankAgency" | "account" | "documents" | "phoneNumber" | "situation" | "situationDate" | "cnpjId" | "email";
export type providersCreationAttributes = Optional<providersAttributes, providersOptionalAttributes>;

export class providers extends Model<providersAttributes, providersCreationAttributes> implements providersAttributes {
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
  bank?: string;
  bankAgency?: string;
  account?: string;
  documents?: string;
  phoneNumber?: string;
  situation?: string;
  situationDate?: string;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId?: number;
  email?: string;

  // providers belongsTo cnpjs via cnpjId
  cnpj!: cnpjs;
  getCnpj!: Sequelize.BelongsToGetAssociationMixin<cnpjs>;
  setCnpj!: Sequelize.BelongsToSetAssociationMixin<cnpjs, cnpjsId>;
  createCnpj!: Sequelize.BelongsToCreateAssociationMixin<cnpjs>;
  // providers hasMany orders via providerId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof providers {
    return providers.init({
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
    bank: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bankAgency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    documents: {
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
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'providers',
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
