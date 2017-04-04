var express = require('express');
var router = express.Router();

var offer_service = require('../services/offer_service');

router.get('/', function(req, res, next){
    res.send({
        test :1 , 
        aleft : 2
    });
})  

router.post('/', function(req, res, next){
    offer_service.add(req.body, function(err, result){
        if(err) next(err);
        res.send(result);
    });
    
}) 

module.exports = router;