'use strict';

const RequestHandler = require('../RequestHandler');

class Toph {
    constructor(baseUrl, token) {
        this.req = new RequestHandler(baseUrl, token);
    }
}

module.exports = Toph;
