// @file controller.js
const Model = require('./model');
const generateTokenService = require('./services/generate-token-service');
const validateTokenService = require('./services/validate-token-service');
const cropService = require("./services/crop-service.js");
const logger = require('../com/utility/logger');

class Controller {

    async generatetoken(request, response) {
        console.log('Controller::generateTokenRequest, \nReqHeader:', request.headers, '\nReqBody:', request.body);
        logger.info('Controller::generateTokenRequest, \nReqBody:'+ JSON.stringify(request.body))
        logger.info('Controller::generateTokenRequest, \nReqHeader:' + JSON.stringify(request.headers))
        try {
            const token = await generateTokenService.generatetoken(request.body);
            response.status(token.statuscode).send(token);
        } catch (e) {
            console.log("err in generate token service", e);
            throw new Error(e);
        }
    }

    async validatetoken(request, response) {
        console.log('Controller::validatetoken, \nReqHeader:', request.headers, '\nReqBody:', request.body);
        try {
            const token = await validateTokenService.validatetoken(request.body);
            response.status(token.statuscode).send(token);
        } catch (e) {
            console.log("err in generate token service", e);
            throw new Error(e);
        }
    }

    async getAllCrops(request, response) {
        console.log('Controller::getcrops, \nReqHeader:', request.headers, '\nReqBody:', request.body);
        try {
            const crops = await cropService.getAllCrops(request.headers);
            response.send(crops);
        } catch (e) {
            console.log("err in crop service", e);
            throw new Error(e);
        }
    }

    async addCrop(request, response) {
        console.log('Controller::addCrop, \nReqHeader:', request.headers, '\nReqBody:', request.body);
        try {
            const crops = await cropService.addCrop(request.body);
            response.status(200).send(crops);
        } catch (e) {
            console.log("err in crop service", e);
            throw new Error(e);
        }
    }
}

module.exports = new Controller();