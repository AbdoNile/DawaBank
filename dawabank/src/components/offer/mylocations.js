import React from 'react';
import UserService from '../../services/userService';

class Mylocations extends React.Component {
 
 singleLocationComponent = (address) => 
    { 
     return <div className="col-sm-4" onClick={() => this.props.onUpdate({location : address})}>
            <div className="tile"  >
                <h3 className="title">{address.title}</h3>
                <p>{address.title} </p>
            </div>
        </div>
    };
 
  render() {
    let addresses = UserService.GetUserAddresses();
    let addresses_markup = addresses.map((address) => {
        return this.singleLocationComponent(address);
    });
    return <div>{addresses_markup}
    <div className="col-sm-4" onClick={() => this.props.toggleMethod("picker")}>
            <div className="tile"  >
                <h3 className="title">Select New Address</h3>
            </div>
        </div>
    </div>;
  }

}

export default Mylocations;
