import React from 'react';

class ListItem extends React.Component {
 deletePressed = (offer) => {
    this.props.deleteHandler(offer.Id)
 }

  render() {
      var offer = this.props.offer;
return      <tr>
                <td className="col-sm-8">
                    <div>
                        <h4>{offer.medicineName}</h4>
                        <p>Expiry date : {offer.expiry_date}
                            <br/>
                            {offer.Id}
                            </p>
                    </div>
                </td>
                <td>{offer.quantity} </td>
                <td>
                    <div className="btn-group btn-group-sm" role="group">
                        <button className="btn btn-primary" type="button">Edit</button>
                        <button className="btn btn-default" type="button">Taken</button>
                        <button className="btn btn-danger" type="button" onClick={this.deletePressed.bind(this,offer)}>Delete </button>
                    </div>
                </td>
            </tr>;
  }

 
}

export default ListItem;
