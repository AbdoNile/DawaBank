var express = require('express');
var router = express.Router();

var medication_service = require('../services/medication_service');

router.get('/:match', function(req, res, next){
     medication_service.match(req.params.match,function(err, result){
        if(err) next(err);
        res.send(result);
    });
}) ;



module.exports = router;