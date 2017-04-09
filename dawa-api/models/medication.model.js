'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MedicationSchema = new Schema({
        "agent_name": {
            type: String
        },
        "atc_code_1": {
            type: String
        },
        "atc_code_2": {
            type: String
        },
        "authorization_status": {
            type: String
        },
        "country_of_manufacturer": {
            type: String
        },
        "dosage_form": {
            type: String
        },
        "generic_name": {
            type: String
        },
        "legal_status": {
            type: String
        },
        "manufacturer_name": {
            type: String
        },
        "marketing_company": {
            type: String
        },
        "marketing_status": {
            type: String
        },
        "nationality": {
            type: String
        },
        "package_size": {
            type: Number
        },
        "package_type": {
            type: String
        },
        "product_control": {
            type: String
        },
        "public_price_(sar)": {
            type: Number
        },
        "registration_no": {
            type: String
        },
        "remarks": {
            type: String
        },
        "route_of_administration": {
            type: String
        },
        "shelf-life_(mon)": {
            type: Number
        },
        "storage_conditions": {
            type: String
        },
        "strength_value": {
            type: Number
        },
        "trade_name": {
            type: String
        },
        "unit_of_strength": {
            type: String
        },
        "unit_of_volume": {
            type: String
        },
        "volume": {
            type: Number
        }
    });

module.exports = mongoose.model('Medication', MedicationSchema);