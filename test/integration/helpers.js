const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

global.request = chai.request(app);
global.UserModel = app.database.models.Users;
global.expect = chai.expect;