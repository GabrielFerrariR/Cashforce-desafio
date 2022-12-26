import chai from "chai";
import sinon from "sinon";
const { expect } = chai;
import OrderController from '../../../src/controllers/Order.controller'
import OrderService from '../../../src/services/Orders.service'
import {getOrdersResponse} from '../../mocks'

import { Request, Response} from 'express';
import Orders from "../../../src/models/Orders";
import { orders } from "../../../src/database/models/orders";

describe('Orders controller layer', () => {
  const req = {} as Request;
  const res = {} as Response;
  const next = () => {};
  const model = new Orders();
  const service = new OrderService(model);
  const controller = new OrderController(service);

  describe('The read method', () => {
    beforeEach(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.stub(service, 'read' ).resolves(getOrdersResponse as unknown as orders[])
    });

    afterEach(sinon.restore);
    
    it('should return a status 200 on response', async () => {
      await controller.read(req, res, next);

      const statusStub = res.status as sinon.SinonStub;

      expect(statusStub.calledWith(200)).to.be.true;
    });

    it('should return an array with orders', async () => {
      await controller.read(req, res, next);

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(getOrdersResponse)).to.be.true;
    });
  })
})