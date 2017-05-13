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
        <td className="col-sm-8">
            <div>
                <h4>{medication.product.item.trade_name}</h4>
                <p>Expiry date : {medication.expiry_date}
                    <br/> 
                    {item.location
                    ? item.location.title
                    : null}
                </p>
            </div>
        </td>

        <td>{medication.quantity}</td>
        
        <td>
            <div className="btn-group btn-group-sm" role="group">
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
            </div>
        </td>
      </tr>
    )
  }
  
}

export default ListItem;
