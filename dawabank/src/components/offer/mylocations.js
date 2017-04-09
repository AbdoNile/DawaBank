import React from 'react';
import UserService from '../../services/userService';
import {Glyphicon} from 'react-bootstrap';
class Mylocations extends React.Component {
 
    addressTemplate = (address) => 
    { 
         return <div className="col-sm-4" onClick={() => this.props.onChange({location : address})}>
            <div className="tile"  >
                <h4 className="title">{address.title}</h4>
                <p>{address.title} </p>
            </div>
         </div>
    };
 
  render() {
    let addresses = UserService.GetUserAddresses();

    let addresses_markup = addresses.map((address) => {
        return this.addressTemplate(address);
    });

    return <div>
        {addresses_markup}
        <div className="col-sm-4" onClick={() => this.props.toggleMethod("picker")}>
                <div className="tile"  >
                    <h4 className="title">Select New Address</h4>
                    <p><Glyphicon glyph="align-left" /></p>
                </div>
            </div>
    </div>;
  }

}

export default Mylocations;
