
import _ from 'lodash';
import SiteSettings from '../settings/siteSettings';
import UserService from './userService';
import  'whatwg-fetch';
class OfferService {
    static allOffers =  [];

    static FindOffers(){
         return fetch(SiteSettings.api.address + "/offers").then(function(res){
                return res.json();
         });
    }

    static AddOffer(offer){
        var offerToAdd =  JSON.parse(JSON.stringify(offer))
        UserService.AddAddress(offerToAdd.location);
        fetch(SiteSettings.api.address + "/offers" , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(offer) });
        
    }

    static DeleteOffer(id){
        fetch(SiteSettings.api.address + "/offers/" + id , { method: 'DELETE'}).then((res) => {
            console.log('deleting' + id);    
        });
        
    }
}

export default OfferService;