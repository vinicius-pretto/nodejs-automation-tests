const axios = require('axios');
const OrderService = require('../src/orders/order.service');
const { orders } = require('./fixtures/orders.json');
const userId = 1;

describe('OrderService', () => {
    let orderService;
    let getStub;

    before(() => {
        orderService = new OrderService();
        const ordersResponse = { data: { orders: orders } }
        getStub = sinon.stub(axios, 'get');
        getStub
            .withArgs(`https://api/v1/orders?userId=${userId}`)
            .returns(Promise.resolve(ordersResponse));
    });

    after(() => {
        getStub.restore();
    });

    describe(`findByUserId(1)`, () => {
        it.only('should return all orders', async() => {
            const response = await orderService.findByUserId(userId);
            expect(response).to.be.eql(orders);
        });
    });
});