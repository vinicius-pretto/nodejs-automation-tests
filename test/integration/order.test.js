const { OK } = require('http-status');
const { orders } = require('./fixtures/order.json');
const userId = 1;

describe('Order routes', () => {
    beforeEach(() => {
        nock('https://api')
            .get(`/v1/orders?userId=${userId}`)
            .reply(200, { orders });
    });

    it(`GET /orders?userId=${userId}`, async() => {
        const response = await request.get(`/orders?userId=${userId}`);

        expect(response).to.have.status(OK);
        expect(response.body).to.be.eql({ orders });
    });
});