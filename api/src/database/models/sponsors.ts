import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { cnpjs, cnpjsId } from './cnpjs';
import type { offers, offersId } from './offers';

export interface sponsorsAttributes {
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
  phoneNumber?: string;
  situation?: string;
  situationDate?: string;
  cnpjId?: number;
  email?: string;
}

export type sponsorsPk = "id";
export type sponsorsId = sponsors[sponsorsPk];
export type sponsorsOptionalAttributes = "id" | "tradingName" | "cashforceTax" | "responsibleName" | "responsibleEmail" | "responsiblePosition" | "responsiblePhone" | "responsibleMobile" | "website" | "postalCode" | "address" | "number" | "complement" | "neighborhood" | "city" | "state" | "bank" | "bankAgency" | "account" | "phoneNumber" | "situation" | "situationDate" | "cnpjId" | "email";
export type sponsorsCreationAttributes = Optional<sponsorsAttributes, sponsorsOptionalAttributes>;

export class sponsors extends Model<sponsorsAttributes, sponsorsCreationAttributes> implements sponsorsAttributes {
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
  phoneNumber?: string;
  situation?: string;
  situationDate?: string;
  cnpjId?: number;
  email?: string;

  // sponsors belongsTo cnpjs via cnpjId
  cnpj!: cnpjs;
  getCnpj!: Sequelize.BelongsToGetAssociationMixin<cnpjs>;
  setCnpj!: Sequelize.BelongsToSetAssociationMixin<cnpjs, cnpjsId>;
  createCnpj!: Sequelize.BelongsToCreateAssociationMixin<cnpjs>;
  // sponsors hasMany offers via sponsorId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof sponsors {
    return sponsors.init({
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
    tableName: 'sponsors',
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
