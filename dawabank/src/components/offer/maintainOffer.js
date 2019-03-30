import React from 'react';
import LabelWrapper from 'generic/bootstrap/controlWrapper/labelWrapper';
import {ProtectedRoute} from 'security/protectedRoute';
import Product from './product';
import Pickup from './pickup';
import moment from 'moment';
import {validator} from '../../utility/Validation';

import offerService from '../../services/offerService';

class MaintainOffer extends ProtectedRoute {
  constructor() {
    super();
    this.state = { };
  }

 
  CanSubmit = () => {
    return  true || this.state.acknowledge;
  }

  TermnsAndConditionsAgreed = (value) => {
    this.setState({ "acknowledge" : value});
  }

  initialize(offerId) {
    if (offerId != null) {
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

  componentDidMount = () => {
    this.initialize(this.props.match.params.id);
  }

  title = () => {
    if (this.props.match.params.id != null) {
      return "Edit Offer"; 
    }
    else{
      return "New Offer";
    }
  }

  saveOffer = () => {
    let data = this.state;
    
    validator.validate(data, offerService.Validations).then((r) => {
      this.setState({validationContext : r}) 
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
        <h3 className="page-title"><i className="mIcon">
        <span className="glyphicon glyphicon-gift"></span>
        </i>{this.title()}</h3>
        <fieldset>
          <legend>What are you donating? </legend>
          <Product initialData={offerData.donation} offerId={offerData.id} 
              onChange={this.offerUpdated} validationContext={validationContext.donation} />
        </fieldset>

        <fieldset>
          <legend>Where will it be picked up? </legend>
          <Pickup initialData={offerData.pickupLocation} 
          onChange={this.locationUpdated} validationContext={validationContext.pickupLocation} />
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
