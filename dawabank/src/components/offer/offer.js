import React from 'react';
import FormField from '../../generic/formField';
import FormContainer from '../../generic/formContainer'
class Offer extends React.Component {
  constructor(props) {
    super(props);
        this.state = { offer: {medicineName : "Panadol", expiry_date: "2012-04-23", agreed : true, "quantity" : 13} };

  
  }

  offerUpdated = (data) => {
      this.setState({ offer : data});
  }

  render() {
    return <div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Add Donated Medicine</h3></div>
            </div>
        <div className="row">
            <div>
                <FormContainer className="form-horizontal" boundValue={this.state.offer} updateContext={this.offerUpdated} >
                     <FormField  label="Medicine Name" type="text" dataElement="medicineName" />
                     <FormField  label="Expiry Date" type="date" dataElement="expiry_date" />
                     <FormField  label="Quanity" type="number"  dataElement="quantity" />
                     <FormField  label="I have read and agreed to the websites rules and guidelines" type="checkbox" dataElement='agreed' />
                     <div className="form-group">
                        <div className="col-sm-offset-2">
                            <button className="btn btn-primary btn-sm" type="submit">Add </button>
                            <button className="btn btn-default" type="button">Cancel </button>
                        </div>
                    </div>
                </FormContainer>

                <hr/>
                 <pre>{JSON.stringify(this.state.offer, null, 2) }</pre>
            </div>
        </div>
        </div>;
  }

  componentDidMount() {
    
  }
}

export default Offer;
