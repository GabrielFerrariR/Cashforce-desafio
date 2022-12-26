import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { orders, ordersId } from './orders';

export interface orderportionsAttributes {
  id: number;
  nDup: string;
  dVenc: string;
  vDup: string;
  availableToMarket?: number;
  orderId?: number;
}

export type orderportionsPk = "id";
export type orderportionsId = orderportions[orderportionsPk];
export type orderportionsOptionalAttributes = "id" | "availableToMarket" | "orderId";
export type orderportionsCreationAttributes = Optional<orderportionsAttributes, orderportionsOptionalAttributes>;

export class orderportions extends Model<orderportionsAttributes, orderportionsCreationAttributes> implements orderportionsAttributes {
  id!: number;
  nDup!: string;
  dVenc!: string;
  vDup!: string;
  availableToMarket?: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number;

  // orderportions belongsTo orders via orderId
  order!: orders;
  getOrder!: Sequelize.BelongsToGetAssociationMixin<orders>;
  setOrder!: Sequelize.BelongsToSetAssociationMixin<orders, ordersId>;
  createOrder!: Sequelize.BelongsToCreateAssociationMixin<orders>;

  static initModel(sequelize: Sequelize.Sequelize): typeof orderportions {
    return orderportions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nDup: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dVenc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vDup: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    availableToMarket: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'orderportions',
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
    ]
  });
  }
}
