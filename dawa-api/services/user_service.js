var db = require('./db');
var User = require('../models/user.model');
var Location = require('../models/location.model');
var _ = require('lodash');
 
var user_service = {
    is_address_registered : function(address){
        return false;
    },
    addAddress : function(userId, input, cb, err){
       
        if(input == null) return ;
        
        var address = new Location(input);
      
        if(!this.is_address_registered(address)){
            
         
        User.findById(userId,  (error, user) => {
            if(user == null){
                user = new User();
                user.portalId = userId;
            }
            
            user.favourite_locations.push(address);
            user.save(user, function(err){
                if(err == null){
                    cb(user)
                }else{
                    cb(err)
                }
            });
        });
        
    }
}   
         
     
};

module.exports = user_service;