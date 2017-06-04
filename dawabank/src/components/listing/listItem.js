import React from 'react';

class ListItem extends React.Component {

  renderActionsBtn(renderOptions) {
    if (renderOptions.shouldRender) {
      return (
        <div className="btn-group btn-group-sm" role="group">
          <button className="btn btn-primary" type="button" onClick={renderOptions.onClickHandlers.edit}>Edit</button>
          <button className="btn btn-default" type="button" onClick={renderOptions.onClickHandlers.taken}>Taken</button>
          <button className="btn btn-danger" type="button" onClick={renderOptions.onClickHandlers.delete}>Delete</button>
        </div>
      )
    } else {
      return null
    }
  }

// return (
//   <tr>
//     <td className="col-sm-8">
//       <h4>{medication.product.item.trade_name}</h4>
//       <p>Expiry date : {medication.expiry_date}</p>
//     </td>

//     <td>{medication.quantity}</td>
    
    
//   </tr>
// )

  render() {
  const item = this.props.item;
  const medication = item.medication;

  if (medication == null) 
    return null;
  else 
    return (
      <div className="c-listItem">

        <div>
          <div className="c-listItem__tradeName">
            {medication.product.item.trade_name}
          </div>

          <div className="c-listItem__genericName">
            {medication.product.item.generic_name} - {medication.product.item.storage_conditions} 
          </div>

          <div className="c-listItem__address">
            {item.location ? item.location.title : null}
          </div>

          <div className="c-listItem__addressNote">
            <div className="c-listItem__noteTitle">Offer has some extra notes</div>
            <div className="c-listItem__noteText">
              {item.location ? `"${item.location.notes}"` : null}
            </div>
          </div>
        </div>


        { 
          this.renderActionsBtn({
            shouldRender: this.props.showActionsBtns,
            onClickHandlers: {
              edit: this.props.deleteHandler.bind(this, item), 
              taken: this.props.deleteHandler.bind(this, item), 
              delete: this.props.deleteHandler.bind(this, item) 
            }
          })
        }
      </div>
    )
  }
  
}

export default ListItem;
