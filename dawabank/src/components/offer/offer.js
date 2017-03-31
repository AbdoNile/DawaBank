import React from 'react';
import FormField from '../../generic/formField';
import FormContainer from '../../generic/formContainer'


class Offer extends React.Component {
  constructor(props) {
    super(props);
        this.state = {offer : this.props.offer};
  }

  render() {
    return      <FormContainer className="form-horizontal" boundValue={this.state.offer} onChange={this.props.onUpdate} dataElement="offer" >
                    <FormField  label="Medicine Name" type="text" dataElement="medicineName" />
                    <FormField  label="Expiry Date" type="date" dataElement="expiry_date" />
                    <FormField  label="Quanity" type="number"  dataElement="quantity" />
            </FormContainer>;
  }
}

export default Offer;
