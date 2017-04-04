
import _ from 'lodash';
import UserService from './userService';
class OfferService {
    static allOffers =  [];

    static FindOffers(){
        return this.allOffers;
    }

    static AddOffer(offer){
        var offerToAdd =  JSON.parse(JSON.stringify(offer))
        UserService.AddAddress(offerToAdd.location);
        this.allOffers.push(offerToAdd);
    }

    static DeleteOffer(id){
        _.remove(this.allOffers, function(item) {
                return item.Id === id;
            });
        console.log('deleting' + id);
    }
}

export default OfferService;