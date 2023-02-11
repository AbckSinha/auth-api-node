"use strict";

const { uuid } = require('uuidv4');
const Model = require('../model');
const { App } = require("../constant");
const { setToken } = require("../utility/token-helper");

const clientID = Model.config.clientid;
const clientSecret = Model.config.clientSecret;

async function generatetoken(req) {
    var resp = {
        statuscode: 200,
        status: "",
        message: "",
        data: {}
    };
    try {
        console.log("request received in service", req);
        console.log("App", App);
        if (req) {
            if (req.tenant != "" && req.resource != "" && req.identifier != "") {
                if (App.tenant.indexOf(req.tenant) > -1 && App.resource.indexOf(req.resource) > -1 && App.identifier.indexOf(req.identifier) > -1) {
                    resp = {
                        statuscode: 200,
                        status: "success",
                        message: "success",
                        data: {
                            token: uuid(),
                            apiresponsetime: new Date().toISOString(),
                            validity: "900 sec",
                            tenant: req.tenant,
                            resource: req.resource,
                            identifier: req.identifier
                        }
                    };
                    setToken(resp.data.token);
                } else {
                    resp = {
                        statuscode: 401,
                        status: "fail",
                        message: "unauthorized user",
                        data: {}
                    };
                }
            } else {
                resp = {
                    statuscode: 400,
                    status: "fail",
                    message: "mandatory parameters missing",
                    data: {}
                };
            }
        } else {
            resp = {
                statuscode: 400,
                status: "fail",
                message: "request is empty",
                data: {}
            };
        }
        return resp;
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    generatetoken: generatetoken
};