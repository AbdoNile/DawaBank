
import _ from 'lodash';

class UserService {
    static my_addresses =  [
           
        ];

    static GetUserAddresses(){
        return this.my_addresses;
    }

    static AddAddress(address){
       if(address == null) return ; 
       
        if(!UserService.IsAddressRegistered(address)){
            return this.my_addresses.push(address);
        }
        
    }

    static IsAddressRegistered(address){
       if(address == null) return false; 
       return _.findIndex(this.my_addresses, { 'google_address_id': address.google_address_id }) !== -1 ;
    }

    static DeleteAddress(id){
        _.remove(this.my_addresses, function(item) {
                return item.google_address_id === id;
            });
        console.log('deleting' + id);
    }
}

export default UserService;