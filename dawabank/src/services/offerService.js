
import SiteSettings from '../settings/siteSettings';
import { VT } from '../utility/Validation'
import ApiClient from './api_client'
class OfferService {

   Validations = {
    "donation": {
      "expiryDate": [VT.Date.Future, "Expiry date must be entered"],
      "product": [VT.NotNull, "product must be selected"],
      "quantity": [VT.Number.Positive, "please enter quanity"]
    },
    pickupLocation: {
      name: [VT.NotNull, "enter a name"],
      phone: [VT.NotNull, "enter a phone number"]
    },
    acknowledge: [i => i, "You must agree the legal stuff!"]
  };

  get(offerId) {
    return ApiClient.get("offers/" + offerId, { method: 'GET' })
      .then(function (res) {
        return res.data;
      });
  }

  find(query) {

    return ApiClient.post("offers/search", query).then(function (res) {
      return res.data;
    });
  }

  save(offer) {

    var saveOfferRequest = {
      "Id": offer.id,
      "PickupLocation": offer.pickupLocation,
      "Donation": offer.donation,
    }


    return fetch(SiteSettings.api.address + "offers", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(saveOfferRequest)
    });

  }

  delete(id) {
    return fetch(SiteSettings.api.address + "offers/delete", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    }).then((res) => {
      console.log('deleting' + id);
    });

  }
}
var offerService = new OfferService();
export default offerService;