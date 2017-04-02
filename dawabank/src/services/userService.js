
import _ from 'lodash';

class UserService {
    static my_addresses =  [
            {
                "position": {
                "lat": 40.17887331434696,
                "lng": 92.49114990234375
                },
                "title": "Ruoqiang, Bayingol, Xinjiang, الصين",
                "google_address_id": "ChIJsek43wC8IDgR_SHDH2kWvRE"
            },
            {
                "position": {
                "lat": 40.17887331434696,
                "lng": 92.49114990234375
                },
                "title": "Ruoqiang, Bayingol, Xinjiang, الصين",
                "google_address_id": "ChIJsek43wC8IDgR_SHDH2kWvRE"
            },
            {
                "position": {
                "lat": 40.17887331434696,
                "lng": 92.49114990234375
                },
                "title": "Ruoqiang, Bayingol, Xinjiang, الصين",
                "google_address_id": "ChIJsek43wC8IDgR_SHDH2kWvRE"
            },
            {
                "position": {
                "lat": 40.17887331434696,
                "lng": 92.49114990234375
                },
                "title": "Ruoqiang, Bayingol, Xinjiang, الصين",
                "google_address_id": "ChIJsek43wC8IDgR_SHDH2kWvRE"
            }
        ];

    static GetUserAddresses(){
        return this.my_addresses;
    }

    static AddAddress(address){
        return this.my_addresses.push(address);
    }

    static DeleteAddress(id){
        _.remove(this.my_addresses, function(item) {
                return item.google_address_id === id;
            });
        console.log('deleting' + id);
    }
}

export default UserService;