import React from 'react';
import LabelWrapper from 'generic/bootstrap/controlWrapper/labelWrapper';
import {ProtectedRoute} from 'security/protectedRoute';
import Medication from './partials/medication';
import SelectLocation from './partials/selectLocation';
import moment from 'moment';
import {validator} from '../../utility/Validation';

import offerService from '../../services/offerService';

class MaintainOffer extends ProtectedRoute {
  constructor() {
    super();
    this.state = { validationContext : {}};
  }

  offerUpdated = (data) => {
    var newState = Object.assign({},this.state.donation, data);
    this.setState({ "donation" : newState});
  }

  CanSubmit = () => {
    return  true || this.state.acknowledge;
  }

  TermnsAndConditionsAgreed = (value) => {
    this.setState({ "acknowledge" : value});
  }

  locationUpdated = (data) => {
    var newState = Object.assign({},this.state.pickupLocation, data);
    this.setState({ "pickupLocation": newState });
  }

  componentDidMount = () => {
    if (this.props.match.params.id != null) {
      offerService.get(this.props.match.params.id).then(offer => {
        this.setState(  offer );
      });
      
    }
    else{
      var offer = {
        donation : {
          expiryDate : moment().format("YYYY-MM-DD")
         }
      }
      this.setState(offer)
    }
  }

  title = () => {
    if (this.props.match.params.id != null) {
      return "Edit Offer"; 
    }
    else{
      return "New Offer";
    }
  }

  goBack = () => {

  }

  saveOffer = () => {
    let data = this.state;
    
    validator.validate(data, offerService.Validations).then((r) => {
      alert("success!");
      
      offerService.save(data).then(result => {
        this.props.history.push('/MyOffers');
      });
    }).catch(r => {
      this.setState({validationContext : r}) 
    });
  }

  render() {
    var offerData = this.state;
    var validationContext = this.state.validationContext || {};
    return (
      <div className="row">
        {/*<pre> {JSON.stringify(this.state, null, 2)}</pre>*/ }
        <h3 className="page-title"><i className="mIcon">
        <span className="glyphicon glyphicon-gift"></span>
        </i>{this.title()}</h3>
        <fieldset>
          <legend>What are you donating? </legend>
          <Medication initialData={offerData.donation} onChange={this.offerUpdated} validationContext={validationContext.donation} />
        </fieldset>

        <fieldset>
          <legend>Where will it be picked up? </legend>
          <SelectLocation initialData={offerData.pickupLocation} onChange={this.locationUpdated} validationContext={validationContext.pickupLocation} />
        </fieldset>

        <fieldset>
          <legend>Agree few legal stuff.. </legend>
          <LabelWrapper wrapperClass="col-sm-12 col-lg-6" controlId="acknowledge" labelText="Agree few legal stuff..">
          <input type="checkbox"  id="acknowledge" checked={offerData.acknowledge} 
           onChange={(event) => this.TermnsAndConditionsAgreed(event.target.checked)} /> 
          </LabelWrapper>
        </fieldset>
        <button type="button" className="btn btn-success" disabled={!this.CanSubmit()} onClick={this.saveOffer}>Save</button>
        <button type="button" className="btn btn-basic"  onClick={this.goBack}>Cancel</button>

      </div>
    );
  }
}

export default MaintainOffer;
