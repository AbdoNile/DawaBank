import React from 'react';
import FormField from '../../generic/formField';
import FormContainer from '../../generic/formContainer'
class Offer extends React.Component {
  constructor() {
    super();
        this.state = { offer: [] };

  }

  render() {
    return <div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Add Donated Medicine</h3></div>
            </div>
        <div className="row">
            <div>
                <FormContainer className="form-horizontal" boundValue={this.state.offer}>
                     <FormField  label="Medicine Name" type="text" dataElement="medicineName" />
                     <FormField  label="Expiry Date" type="date" dataElement="expiry_date" />
                     <FormField  label="Quanity" type="number"  dataElement="quantity" />
                     <FormField  label="I have read and agreed to the websites rules and guidelines" type="checkbox" dataElement='agreed' />
                     <div className="form-group">
                        <div className="col-sm-offset-2">
                            <button className="btn btn-primary btn-sm" type="button">Add </button>
                            <button className="btn btn-default" type="button">Cancel </button>
                        </div>
                    </div>
                </FormContainer>
            </div>
        </div>
        </div>;
  }

  componentDidMount() {
    this.setState({ offer: {medicineName : "Panadol", expiry_date: "02/03/2016", agreed : true, "quantity" : 13} });
  }
}

export default Offer;
