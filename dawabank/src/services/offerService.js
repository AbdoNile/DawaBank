
import SiteSettings from '../settings/siteSettings';
import  'whatwg-fetch';
class OfferService {
    static allOffers =  [];

    static Get(offerId){
        return fetch(SiteSettings.api.address + "offers/" + offerId, {method: 'GET'})
         .then(function(res){
                return res.json();
         });
    }

    static FindOffers(query){
         return fetch(SiteSettings.api.address + "offers/search",{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query) }).then(function(res){
                return res.json();
         });
    }

    static AddOffer(offer){
      
        var saveOfferRequest = {
            "PickupLocation": {
                "position" : offer.location.position,
                "FullAddress" : offer.location.title,
                "Key" : offer.location.google_address_id,
                "Name" : offer.location.contact_person,
                "phone" : offer.location.phone,
                "notes" : offer.location.notes,
              },
              "Donation": offer.Donation,
              "AddLocationToBookMarks" : offer.location.addToFavorite
        }


         fetch(SiteSettings.api.address + "offers" , {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(saveOfferRequest) });
        
    }

    static DeleteOffer(id){
        return fetch(SiteSettings.api.address + "offers/delete", {
             method: 'POST',
             headers: {
                'Content-Type': 'application/json'
            },
             body : JSON.stringify( {id : id })          
            }).then((res) => {
            console.log('deleting' + id);    
        });
        
    }
}

export default OfferService;