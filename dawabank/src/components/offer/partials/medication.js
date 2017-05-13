import React from 'react';
import FormField from '../../../generic/formField';
import FormContainer from '../../../generic/formContainer';
import Wrapper from '../../../generic/controlWrapper/wrapper';

import ProductLookup from '../../common/productLookup';

class Medication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {product : this.props.product};
  }

  render() {
    return (
      <div className="col-sm-8">
        <FormContainer className="" boundValue={this.state.product} onChange={this.props.onUpdate} dataElement="medication" >
          <Wrapper>
            <ProductLookup  dataElement="product" label="Trade Name" />
          </Wrapper>
          <FormField label="Expiry Date" type="date" dataElement="expiry_date" />
          <FormField label="Quanity" type="number"  dataElement="quantity" />
        </FormContainer>
      </div>
    )
  }
}

export default Medication;
