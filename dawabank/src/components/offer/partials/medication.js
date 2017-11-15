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
        <FormContainer className="" boundValue={this.state.product} onChange={this.props.onUpdate} dataElement="Donation" >
          <Wrapper>
            <ProductLookup  dataElement="ProductId" label="Medicine Name"    wrapperClass="col-sm-4" />
          </Wrapper>
          <FormField label="Expiry Date" type="date" dataElement="ExpiryDate"  wrapperClass="col-sm-4"/>
          <FormField label="Quanity" type="number"  dataElement="quantity"   wrapperClass="col-sm-4" />
        </FormContainer>
      </div>
    )
  }
}

export default Medication;
