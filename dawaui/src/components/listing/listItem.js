import React from 'react';

class ListItem extends React.Component {

  render() {
  const item = this.props.item;
  const medication = item.medication;
  
  if (medication == null) 
    return null;
  else 
    return (
      <tr>
      <td>
          <h4>{medication.product.item.trade_name}</h4>
          <p className="expiry_date">Expiry Date
              <time>{medication.expiry_date}</time>
          </p>
          <p className="grey"> {item.location
                    ? item.location.title
                    : null}</p>
      </td>
      <td className="text-center"><b>Quantity: </b>{medication.quantity}</td>
      <td className="text-center actions">
      <button className="btn btn-primary" type="button">Edit</button>
            <button className="btn btn-default" type="button">Taken</button>
            <button
            className="btn btn-danger"
            type="button"
            onClick={this
            .props
            .deleteHandler
            .bind(this, item)}>Delete
            </button>
          <button type="button" className="btn btn-icon btn-warning" data-toggle="modal" data-target="#send_message"><i className="mIcon">&#xf15a;</i></button>
          <button type="button" className="btn btn-icon btn-info" data-toggle="modal" data-target="#send_message"><i className="mIcon">&#xf1f9;</i></button>
      </td>
  </tr>

    
    )
  }
  
}

export default ListItem;
