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
            <figure className="media">
              <figcaption className="media-body">
                <h6 className="title text-truncate">{item.product}</h6>
                <h6>   {item.pickupLocation ? item.pickupLocation.fullAddress : null}</h6>
                <dl className="param param-inline small">
                  <dt>Expiry Date: </dt>
                  <dd> <date> {moment(product.expiryDate).fromNow()}</date></dd>
                </dl>
                <dl className="param param-inline small">
                  <dt>Quantity: </dt>
                  <dd>{product.quantity}</dd>
                </dl>
              </figcaption>
            </figure>
          </td>
          <td >
            <div class="btn-group-vertical" role="group" >
              {(this.props.showOwnerActions && <OwnerActions offerId={item.id} deleteHandler={this.props.deleteHandler} />)}
              {(!this.props.showOwnerActions && <VisitorActions offerId={item.id} />)}
            </div>
          </td>
        </tr>










      )
  }

}

export default ListItem;
