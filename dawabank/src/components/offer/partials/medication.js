import React from 'react';
import FormField from 'generic/formField';
import FormContainer from 'generic/formContainer';
import Wrapper from 'generic/bootstrap/controlWrapper/wrapper';

import ProductLookup from '../../common/productLookup';

class Medication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {product : this.props.product};
  }

  render() {
    return (
      <div >
        <FormContainer className="" boundValue={this.props.product} onChange={this.props.onUpdate} dataElement="donation" >
          <Wrapper>
            <ProductLookup  dataElement="productId" label="Medicine Name" boundValue={this.props.product}  
             wrapperClass="col-sm-4" />
          </Wrapper>
          <FormField label="Expiry Date" type="date" dataElement="expiryDate"  wrapperClass="col-sm-4"/>
          <FormField label="Quanity" type="number"  dataElement="quantity"   wrapperClass="col-sm-4" />
        </FormContainer>
      </div>
    )
  }
}

export default Medication;
