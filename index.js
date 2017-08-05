'use strict';

const Iroh = require('./lib/iroh/');
const Toph = require('./lib/toph');

const apis = {
    PRODUCTION: 'https://api.weeb.sh',
    STAGING: 'https://staging.weeb.sh',
};

class WeebServices {
    constructor(token, apiUrl) {
        apiUrl = apiUrl || {};

        let accountsUrl;
        let imagesUrl;
        if (typeof apiUrl === 'string') {
            accountsUrl = `${apiUrl}/accounts`;
            imagesUrl = `${apiUrl}/images`;
        } else {
            accountsUrl = apiUrl.accounts || `${apis.PRODUCTION}/accounts`;
            imagesUrl = apiUrl.images || `${apis.PRODUCTION}/images`;
        }

        this.Accounts = new Iroh(accountsUrl, token);
        this.Images = new Toph(imagesUrl, token);
    }
}

WeebServices.APIS = apis;

module.exports = WeebServices;
