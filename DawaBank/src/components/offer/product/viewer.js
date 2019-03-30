import React from 'react';
import LabelWrapper from '../../../generic/bootstrap/controlWrapper/labelWrapper';

class Viewer extends React.Component {
 render() {
    var medication = this.props.value || { product : {}};
    return (
      <div >
      <LabelWrapper wrapperClass="col-sm-12 col-lg-6" controlId="product" labelText="Product">
          {medication.product.tradeName}
        </LabelWrapper>
        <LabelWrapper wrapperClass="col-sm-12 col-lg-3" controlId="expiryDate" labelText="Expiry Date">
          {medication.expiryDate}
        </LabelWrapper>
        <LabelWrapper wrapperClass="col-sm-12 col-lg-3" controlId="quantity" labelText="Quantity">
          {medication.quantity}
        </LabelWrapper>
      </div>
    )
  }
}

export default Viewer;