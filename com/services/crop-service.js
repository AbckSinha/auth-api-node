//@file crop-service.js
"use strict";
const { getCrops, setCrop, getCrop } = require('../utility/crop-helper');
const { validatetoken } = require("./validate-token-service");

module.exports = {
    getAllCrops: getAllCrops,
    addCrop: addCrop
}

async function getAllCrops(headers) {
    return getCrops();
}

async function addCrop(crop) {
    setCrop(crop);
    return getCrops();
}

