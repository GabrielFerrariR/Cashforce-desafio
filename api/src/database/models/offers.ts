import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { orders, ordersId } from './orders';
import type { sponsors, sponsorsId } from './sponsors';

export interface offersAttributes {
  id: number;
  tax: string;
  tariff: string;
  adValorem: string;
  float: string;
  iof: string;
  expiresIn: Date;
  paymentStatusSponsor?: number;
  paymentStatusProvider?: number;
  orderId?: number;
  sponsorId?: number;
}

export type offersPk = "id";
export type offersId = offers[offersPk];
export type offersOptionalAttributes = "id" | "paymentStatusSponsor" | "paymentStatusProvider" | "orderId" | "sponsorId";
export type offersCreationAttributes = Optional<offersAttributes, offersOptionalAttributes>;

export class offers extends Model<offersAttributes, offersCreationAttributes> implements offersAttributes {
  id!: number;
  tax!: string;
  tariff!: string;
  adValorem!: string;
  float!: string;
  iof!: string;
  expiresIn!: Date;
  paymentStatusSponsor?: number;
  paymentStatusProvider?: number;
  orderId?: number;
  sponsorId?: number;

  // offers belongsTo orders via orderId
  order!: orders;
  getOrder!: Sequelize.BelongsToGetAssociationMixin<orders>;
  setOrder!: Sequelize.BelongsToSetAssociationMixin<orders, ordersId>;
  createOrder!: Sequelize.BelongsToCreateAssociationMixin<orders>;
  // offers belongsTo sponsors via sponsorId
  sponsor!: sponsors;
  getSponsor!: Sequelize.BelongsToGetAssociationMixin<sponsors>;
  setSponsor!: Sequelize.BelongsToSetAssociationMixin<sponsors, sponsorsId>;
  createSponsor!: Sequelize.BelongsToCreateAssociationMixin<sponsors>;

  static initModel(sequelize: Sequelize.Sequelize): typeof offers {
    return offers.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      tax: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      tariff: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      adValorem: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      float: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      iof: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      expiresIn: {
        type: DataTypes.DATE,
        allowNull: false
      },
      paymentStatusSponsor: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      paymentStatusProvider: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'orders',
          key: 'id'
        }
      },
      sponsorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'sponsors',
          key: 'id'
        }
      }
    }, {
    sequelize,
    tableName: 'offers',
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
        name: "orderId",
        using: "BTREE",
        fields: [
          { name: "orderId" },
        ]
      },
      {
        name: "sponsorId",
        using: "BTREE",
        fields: [
          { name: "sponsorId" },
        ]
      },
    ]
  });
  }
}
