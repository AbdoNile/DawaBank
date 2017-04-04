import React from 'react';

class ListItem extends React.Component {

  render() {
        const item =  this.props.item;
        const offer = item.offer;
        if(offer == null ) return null;
        else
        return  <tr>
                <td className="col-sm-8">
                    <div>
                        <h4>{offer.medicineName}</h4>
                        <p>Expiry date : {offer.expiry_date}
                            <br/>
                            {item.location.title}
                            </p>
                             
                    </div>
                </td>
                <td>{offer.quantity} </td>
                <td>
                    <div className="btn-group btn-group-sm" role="group">
                        <button className="btn btn-primary" type="button">Edit</button>
                        <button className="btn btn-default" type="button">Taken</button>
                        <button className="btn btn-danger" type="button" onClick={this.props.deleteHandler.bind(this,offer)}>Delete </button>
                    </div>
                </td>
            </tr>;
  }

 
}

export default ListItem;
