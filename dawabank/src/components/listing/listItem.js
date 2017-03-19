import React from 'react';

class ListItem extends React.Component {
 

  render() {
      var offer = this.props.offer;
return      <tr>
                <td className="col-sm-8">
                    <div>
                        <h4>{offer.title}</h4>
                        <p>Expiry date : {offer.expiryDate}</p>
                    </div>
                </td>
                <td>{offer.quantity} </td>
                <td>
                    <div className="btn-group-vertical btn-group-sm" role="group">
                        <button className="btn btn-primary" type="button">Edit Details</button>
                        <button className="btn btn-default" type="button">Mark as Taken</button>
                        <button className="btn btn-danger" type="button">Delete </button>
                    </div>
                </td>
            </tr>;
  }

 
}

export default ListItem;
