const axios = require('axios');

class OrderService {
    constructor() {

    }

    async findByUserId(userId) {
        try {
            const response = await axios.get(`https://api/v1/orders?userId=${userId}`);
            return response.data.orders;
        } catch(error) {
            console.log(`Error on find orders`,  error);
        }
    }
}

module.exports = OrderService;