'use strict';

const RequestHandler = require('../RequestHandler');

class Iroh {
    constructor(baseUrl, token) {
        this.req = new RequestHandler(baseUrl, token);
    }

    validate(token) {
        return this.req.get(`/validate/${token}`);
    }

    createToken(userId) {
        return this.req.post(`/token/create`, {
            userId,
        });
    }

    deleteToken(tokenId) {
        return this.req.delete(`/token/${tokenId}`);
    }

    createUser(name, discordUserId, active, scopes) {
        if (active === undefined || active === null) active = true;
        if (!scopes) scopes = [];

        return this.req.post(`/user/create`, {
            name,
            discordUserId,
            active,
            scopes,
        });
    }

    deleteUser(userId) {
        return this.req.delete(`/user/${userId}`);
    }

    updateUser(userId, { name, discordUserId, active, scopes }) {
        let data = {};
        if (name) data.name = name;
        if (discordUserId) data.discordUserId = discordUserId;
        if (active !== undefined && active !== null) data.active = active;
        if (scopes) data.scopes = scopes;

        return this.req.post(`/user/update/${userId}`, data);
    }
}

module.exports = Iroh;
