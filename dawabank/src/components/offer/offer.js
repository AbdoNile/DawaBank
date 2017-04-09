import React from 'react';
import FormField from '../../generic/formField';
import FormContainer from '../../generic/formContainer';
import Wrapper from '../../generic/controlWrapper/wrapper';

import MedicationLookup from '../medicationLookup';

class Offer extends React.Component {
  constructor(props) {
    super(props);
        this.state = {offer : this.props.offer};
  }

  render() {
     return <div className="col-sm-8">
      <FormContainer className="" boundValue={this.state.offer} onChange={this.props.onUpdate} dataElement="offer" >
                    <Wrapper><MedicationLookup   label="Trade Name" /></Wrapper>
                    <FormField  label="Medicine Name" type="text" dataElement="medicine_name" />
                    <FormField  label="Expiry Date" type="date" dataElement="expiry_date" />
                    <FormField  label="Quanity" type="number"  dataElement="quantity" />
            </FormContainer></div>;
  }
}

export default Offer;
