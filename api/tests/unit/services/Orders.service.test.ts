import chai from "chai";
import sinon from "sinon";
const { expect } = chai;
import OrderService from '../../../src/services/Orders.service'
import {getOrdersResponse} from '../../mocks'

import Orders from "../../../src/models/Orders";
import { orders } from "../../../src/database/models/orders";

describe('Orders service layer',() => {
  const model = new Orders();
  const service = new OrderService(model);
  describe('the read method', () => {
    it('should return an array of orders', async () => {
      sinon.stub(model, 'findAll').resolves(getOrdersResponse as unknown as orders[]);

      const result = await service.read();
      expect(result).to.be.equal(getOrdersResponse)
    })
  })
})