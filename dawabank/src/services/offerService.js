
import SiteSettings from '../settings/siteSettings';
import  'whatwg-fetch';
class OfferService {
    static allOffers =  [];

    static FindOffers(){
         return fetch(SiteSettings.api.address + "offers").then(function(res){
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
              "Donation": {
                "ProductId": offer.medication.product.item.medicationId,
                "ExpiryDate":offer.medication.expiry_date,
                "quantity": offer.medication.quantity
              },
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
        return fetch(SiteSettings.api.address + "offers/" + id , { method: 'DELETE'}).then((res) => {
            console.log('deleting' + id);    
        });
        
    }
}

export default OfferService;