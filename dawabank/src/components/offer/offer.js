import React from 'react';
import FormField from '../../generic/formField';
import FormContainer from '../../generic/formContainer'
import DateInput from '../../generic/controls/dateInput';


class Offer extends React.Component {
  constructor(props) {
    super(props);
        this.state = {offer : this.props.offer};
  }

  render() {
    return      <FormContainer className="form-horizontal" boundValue={this.state.offer} emitChanges={this.props.onUpdate} dataElement="offer" >
                    <FormField  label="Medicine Name" type="text" dataElement="medicineName" />
                    <DateInput  label="Expiry Date" type="date" dataElement="expiry_date" boundValue={this.state.offer.expiry_date} />
                    <FormField  label="Quanity" type="number"  dataElement="quantity" />
                    <FormField  label="I have read and agreed to the websites rules and guidelines" type="checkbox" dataElement='agreed' />
                    <div className="form-group">
                    <div className="col-sm-offset-2">
                        <button className="btn btn-primary btn-sm pull-right" type="submit">Update </button>
                       
                    </div>
                </div>
            </FormContainer>;
  }
}

export default Offer;
