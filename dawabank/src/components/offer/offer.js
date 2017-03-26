import React from 'react';
import _ from 'lodash';
import FormField from '../../generic/formField';
import FormContainer from '../../generic/formContainer'
import DateInput from '../../generic/controls/dateInput';

import OfferService from '../../services/offerService';

class Offer extends React.Component {
  constructor(props) {
    super(props);
        this.state = { offer: {medicineName : "Panadol", expiry_date: "2012-04-23", agreed : true, "quantity" : 13} };
        this.offerUpdated =  this.offerUpdated.bind(this); 
  }

  offerUpdated(data){
      this.setState({ offer : data.offer});
      data.offer.Id = _.uniqueId('offer_');
      OfferService.AddOffer(data.offer);
      this.props.router.push('Find');
  }

  render() {
    return <div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Add Donated Medicine</h3></div>
            </div>
        <div className="row">
            <div  className="col-md-12">
                <FormContainer className="form-horizontal" boundValue={this.state.offer} emitChanges={this.offerUpdated} dataElement="offer" >
                     <FormField  label="Medicine Name" type="text" dataElement="medicineName" />
                     <DateInput  label="Expiry Date" type="date" dataElement="expiry_date" boundValue={this.state.offer.expiry_date} />
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
}

export default Offer;
