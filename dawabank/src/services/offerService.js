
import _ from 'lodash';

class OfferService {
    static allOffers =  [
            /*{
                medicineName : "Panadol",
                quantity : 12,
                expiry_date : "12-05-2018",
                Id : 3434

            },
            {
                medicineName : "Ibuprofene",
                quantity : 3,
                expiry_date : "12-06-2018",
                Id : 5454

            }*/
        ];

    static FindOffers(){
        return this.allOffers;
    }

    static AddOffer(offer){
        return this.allOffers.push(offer);
    }

    static DeleteOffer(id){
        _.remove(this.allOffers, function(offer) {
                return offer.Id === id;
            });
        console.log('deleting' + id);
    }
}

export default OfferService;