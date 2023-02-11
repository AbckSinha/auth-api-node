//@file: token-helper.js

"use strict";

const tokenBucket = [];

module.exports = {
    setToken: setToken,
    getToken: getToken
}

function setToken(token) {
    tokenBucket.push(token);
    console.log("tokenBucket", tokenBucket);
}

function getToken(token) {
    let foundedToken = "";
    if (tokenBucket.indexOf(token) > -1) {
        foundedToken = token;
    } else {
        foundedToken = "";
    }
    return foundedToken;
}