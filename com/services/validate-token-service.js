//@file : validate-token-sevice.js
"use strict";

const { getToken } = require("../utility/token-helper");

module.exports = {
    validatetoken: validatetoken
}

async function validatetoken(req) {
    var resp = {
        statuscode: 200,
        status: "",
        message: "",
        data: {}
    };
    try {
        console.log("request received in validate service", req);
        if (req) {
            if (req.token != "") {
                var tokenFromBucket = getToken(req.token);
                if (tokenFromBucket != "") {
                    resp = {
                        statuscode: 200,
                        status: "success",
                        message: "valid token",
                        data: {
                            token: tokenFromBucket
                        }
                    };
                } else {
                    resp = {
                        statuscode: 200,
                        status: "fail",
                        message: "Invalid token",
                        data: {
                            token: ""
                        }
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
    }
    catch (e) {
        throw new Error(e);
    }
}