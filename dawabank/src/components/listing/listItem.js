import React from 'react';
import moment from 'moment';
import OwnerActions from './ownerActions';
import VisitorActions from './visitorActions';

class ListItem extends React.Component {

  render() {
    const item = this.props.item;
    const product = item.donation;

    if (product == null)
      return null;
    else
      return (
        <tr>
          <td>
              <figcaption className="media-body">
                <h4 className="title text-truncate">{item.donation.productName}</h4>
                <h6>   {item.pickupLocation ? item.pickupLocation.fullAddress : null}</h6>
                <p className="small pull-right">
                 <span className="badge"> Expiry Date: <date> {moment(product.expiryDate).fromNow()}</date> </span>
                 &nbsp;
                 <span className="badge">   Quantity: {product.quantity}</span>
           
                
                </p>
              </figcaption>
            
          </td>
          <td >
            <div className="btn-group-vertical" role="group" >
              {(this.props.showOwnerActions && <OwnerActions offerId={item.id} deleteHandler={this.props.deleteHandler} />)}
              {(!this.props.showOwnerActions && <VisitorActions offerId={item.id} />)}
            </div>
          </td>
        </tr>
      )
  }

}

export default ListItem;
