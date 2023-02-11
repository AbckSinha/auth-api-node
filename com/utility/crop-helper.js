//@file : crop-helper.js
"use strict";

const crops = {
    "region": "India",
    "crops": [
        {
            "id": "1",
            "name": "Wheat",
            "region": "Uttar Pradesh",
            "field": "plain",
            "season": "summer",
            "properties": {
                "crop_cycle": "2",
                "crop_field": ""
            }
        },
        {
            "id": "2",
            "name": "Rice",
            "region": "Punjab",
            "field": "plain",
            "season": "Rainy",
            "properties": {
                "crop_cycle": "1",
                "crop_field": ""
            }
        },
        {
            "id": "3",
            "name": "Pulse",
            "region": "Maharashtra",
            "field": "plain",
            "season": "summer",
            "properties": {
                "crop_cycle": "2",
                "crop_field": ""
            }
        },
        {
            "id": "4",
            "name": "Cotton",
            "region": "Karnataka",
            "field": "plain",
            "season": "summer",
            "properties": {
                "crop_cycle": "3",
                "crop_field": ""
            }
        }
    ]
};

module.exports = {
    getCrops: getCrops,
    setCrop: setCrop
};

function getCrops() {
    return crops;
}

function setCrop(cr) {
    var result = false;
    var cropsList = getCrops().crops;
    for (let i = 0; i < cropsList.length; i++) {
        console.log(cropsList[i].id)
        if (cropsList[i].id != cr.id) {
            result == true;
        }
    }
    console.log("result", result);
    if (!result) {
        cropsList.push(cr);
    }
}
