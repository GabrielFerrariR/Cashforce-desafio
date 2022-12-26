import sinon from 'sinon';
import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../../src/app';
import {getOrdersResponse} from '../mocks'
import { orders } from '../../src/database/models/orders';

chai.use(chaiHttp);

const { expect } = chai;

let chaiHttpResponse: Response;

describe('GET /orders on success', () => {
  beforeEach(async () => {
    sinon
      .stub(orders, 'findAll')
      .resolves(getOrdersResponse as unknown as orders[]);
  });

  afterEach(()=>{
    sinon.restore();
  });

  it('should return a status 200', async () => {
    //@ts-ignore
    chaiHttpResponse = await chai
      .request(app)
      .get('/orders')
    expect(chaiHttpResponse.status.valueOf()).to.be.equal(200);
  });

  it('an array of orders', async () => {
    //@ts-ignore
    chaiHttpResponse = await chai
      .request(app)
      .get('/orders')
    expect(chaiHttpResponse.body).to.be.deep.equal(getOrdersResponse);
  });
});