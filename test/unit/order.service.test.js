const axios = require('axios');
const OrderService = require('../../src/orders/order.service');
const { orders } = require('./fixtures/orders.json');

describe('OrderService', () => {
    describe(`findByUserId(1)`, () => {
        it('should return orders form userId=1', async() => {
            const userId = 1;
            const orderService = new OrderService();
            const ordersResponse = { data: { orders: orders } };
            const getStub = sinon.stub(axios, 'get');
            getStub
                .withArgs(`https://api/v1/orders?userId=${userId}`)
                .returns(Promise.resolve(ordersResponse));

            const response = await orderService.findByUserId(userId);

            expect(response).to.be.eql(orders);
            getStub.restore();
        });
    });
});