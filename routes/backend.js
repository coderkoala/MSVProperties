'use strict';

var express = require('express');
var router = express.Router();

// Import controllers.
const requireDir = require('require-dir');
const _ = requireDir('../controller');
const api = '/v1';

/* Backend for the system. */
router.get(`${api}/geolocation`, _.api.view);
router.post(`${api}/geolocation`, _.api.post);

// Zillow API Controller.
router.post(`${api}/zillow`, _.zillow.fetchXMLAPI);

// Email Endpoint.
router.post(`${api}/email`, _.email.sendEmail);

// Agent fetch single Endpoint.
router.post(`${api}/agent`, _.agent.fetchAgentTuple);

module.exports = router;
