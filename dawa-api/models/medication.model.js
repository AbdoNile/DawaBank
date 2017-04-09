'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MedicationSchema = new Schema({
        "agent_name": {
            "type": "string"
        },
        "atc_code_1": {
            "type": "string"
        },
        "atc_code_2": {
            "type": "string"
        },
        "authorization_status": {
            "type": "string"
        },
        "country_of_manufacturer": {
            "type": "string"
        },
        "dosage_form": {
            "type": "string"
        },
        "generic_name": {
            "type": "string"
        },
        "legal_status": {
            "type": "string"
        },
        "manufacturer_name": {
            "type": "string"
        },
        "marketing_company": {
            "type": "string"
        },
        "marketing_status": {
            "type": "string"
        },
        "nationality": {
            "type": "string"
        },
        "package_size": {
            "type": "number"
        },
        "package_type": {
            "type": "string"
        },
        "product_control": {
            "type": "string"
        },
        "public_price_(sar)": {
            "type": "number"
        },
        "registration_no": {
            "type": "string"
        },
        "remarks": {
            "type": "string"
        },
        "route_of_administration": {
            "type": "string"
        },
        "shelf-life_(mon)": {
            "type": "number"
        },
        "storage_conditions": {
            "type": "string"
        },
        "strength_value": {
            "type": "number"
        },
        "trade_name": {
            "type": "string"
        },
        "unit_of_strength": {
            "type": "string"
        },
        "unit_of_volume": {
            "type": "string"
        },
        "volume": {
            "type": "number"
        }
    });

module.exports = mongoose.model('Medication', MedicationSchema);