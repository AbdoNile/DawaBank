
import SiteSettings from '../settings/siteSettings';
import  'whatwg-fetch';
class OfferService {
    static allOffers =  [];

    static Get(offerId){
        return Promise.resolve({
            "donation": {
              "product": {
                "id": "string",
                "tradeName": "medication_name_1",
                "genericName": "generice_name1",
                "medicationId": "id_1"
              },
              "expiryDate": "2018-10-19T23:00:00.000Z",
              "quantity": "2"
             

            },
            "pickupLocation": {
              "name": "asas",
              "phone": "asas",
              "notes": "asasa",
              "coords": [
                {
                  "key": "ChIJN9rqM5cAcUgRlOZFRbCoYi8",
                  "position": {
                    "lat": 51.93684201972726,
                    "lng": -2.327728271484375
                  },
                  "fullAddress": "Unnamed Road, Gloucester GL19 3DB، المملكة المتحدة"
                }
              ]
            },
            "acknowledge": true
          });
        return fetch(SiteSettings.api.address + "offers/" + offerId, {method: 'GET'})
         .then(function(res){
                return res.json();
         });
    }

    static FindOffers(query){
        var myMedications = new Array(10);
         for (let index = 0; index < 10; index++) {
             myMedications[index] = {
                "pickupLocation": {
                  "fullAddress": "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
                  "key": "string",
                  "name": "string",
                  "phone": "string",
                  "notes": "string",
                  "position": {
                    "lat": 0,
                    "lng": 0
                  }
                },
                "donation": {
                  "productId": "string",
                  "expiryDate": "2018-10-20T16:17:30.859Z",
                  "quantity": 0,
                  "productName": "Medication Name",
                  "genericName": "string"
                },
                "addLocationToFavourites": true,
                "id": "string"
              }
             
         }
         return Promise.resolve(myMedications);



         /* return fetch(SiteSettings.api.address + "offers/search",{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query) }).then(function(res){
                return res.json();
         }); */
    }

    static AddOffer(offer){
      
        var saveOfferRequest = {
            "Id" : offer.id,
            "PickupLocation": offer.pickupLocation,
            "Donation": offer.donation,
        }


        return fetch(SiteSettings.api.address + "offers" , {
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