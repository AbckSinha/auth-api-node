// @file routes.js
const Controller = require('./controller');

class Routes {
    constructor() {
        this.initialize = this.initialize.bind(this);
        this.isAlive = this.isAlive.bind(this);
    }

    isAlive(request, reply) {
        return {
            message: "Welcome to the Authorization API"
        };
    }

    async initialize(fastify, options) {
        fastify.get('/live', this.isAlive);
        fastify.post('/generatetoken', Controller.generatetoken);
        fastify.post('/validatetoken', Controller.validatetoken);
        fastify.get('/getallcrops', Controller.getAllCrops);
        fastify.post('/addcrop', Controller.addCrop);
    }
}

const routes = new Routes();

module.exports = routes.initialize;