const OrderService = require('./order.service');

module.exports = (app) => {
    const orderService = new OrderService();

    app.get('/orders', (req, res) => {
        return orderService.findByUserId(req.query.userId)
            .then(orders => res.json({ orders }));
    });
}