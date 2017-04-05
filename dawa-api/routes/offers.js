var express = require('express');
var router = express.Router();

var offer_service = require('../services/offer_service');

router.get('/', function(req, res, next){
     offer_service.get_all(function(err, result){
        if(err) next(err);
        res.send(result);
    });
}) ;



router.delete('/:id', function(req, res, next){
     offer_service.delete(req.params.id, function(err, result){
        if(err) next(err);
        res.send(result);
    });
}) ;


router.post('/', function(req, res, next){
    offer_service.add(req.body, function(err, result){
        if(err) next(err);
        res.send(result);
    });
    
}) 

module.exports = router;