import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
class ListItem extends React.Component {

  render() {
    const item = this.props.item;
    const product = item.donation;

    if (product == null)
      return null;
    else
      return (
        <div className="list-group-item">
          <h4>{product.productName}
            <span class="label label-default">Expiry Date     <date> {moment(product.expiryDate).fromNow()}</date>
            </span>
          </h4>

          <p className="grey"> {item.pickupLocation
            ? item.pickupLocation.fullAddress
            : null}</p>
          <p><b>Quantity: </b>{product.quantity}</p>


          <p className="actions">
            {(this.props.showOwnerActions &&
              <div>
                <button className="btn btn-primary" type="button">
                  <Link to={'/Offer/edit/' + item.id} >
                    Edit</Link>
                </button>
                <button className="btn btn-default" type="button">Taken</button>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={this
                    .props
                    .deleteHandler
                    .bind(this, item)}>Delete
        </button> </div>)
            }
            {(!this.props.showOwnerActions &&

              <div>
                <button type="button" className="btn btn-icon btn-warning" data-toggle="modal" data-target="#send_message">
                  <i className="mIcon">&#xf15a;</i>
                </button>

                <button type="button" className="btn btn-icon btn-info" data-toggle="modal" data-target="#send_message">
                  <i className="mIcon">&#xf1f9;</i>
                </button>
              </div>

            )}
          </p>

        </div>


      )
  }

}

export default ListItem;
