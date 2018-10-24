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
          <td></td>
          <td></td>
          <td className="text-right">
          <div className="actions">
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
          </div>

          </td>
        </tr>


          

        

         
    


      )
  }

}

export default ListItem;
