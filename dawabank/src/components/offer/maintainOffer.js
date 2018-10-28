import React from 'react';
import LabelWrapper from 'generic/bootstrap/controlWrapper/labelWrapper';

import Medication from './partials/medication';
import SelectLocation from './partials/selectLocation';

import OfferService from 'services/offerService';

class MaintainOffer extends React.Component {
  constructor() {
    super();
    this.state = { };
   
  }

  offerUpdated = (data) => {
    var newState = Object.assign({},this.state.donation, data);
    this.setState({ "donation" : newState});
  }

  CanSubmit = () => {
    return this.state.acknowledge;
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
      OfferService.Get(this.props.match.params.id).then(offer => {
        this.setState(  offer );
      });

    }
  }

  saveOffer = () => {
    let data = this.state;
    OfferService.AddOffer(data).then(result => {
      this.props.history.push('/MyOffers');
    });
  }

  render() {
    var offerData = this.state;
    return (
      <div className="row">
        <pre> {JSON.stringify(this.state, null, 2)}</pre>
        <h1 className="page-title"><i className="mIcon">&#xf158;</i>New Offer</h1>

        <fieldset>
          <legend>What are you donating? </legend>
          <Medication initialData={offerData.donation} onChange={this.offerUpdated} />
        </fieldset>

        <fieldset>
          <legend>Where will it be picked up? </legend>
          <SelectLocation initialData={offerData.pickupLocation} onChange={this.locationUpdated} />
        </fieldset>

        <fieldset>
          <legend>Agree few legal stuff.. </legend>
          <LabelWrapper wrapperClass="col-sm-12 col-lg-6" controlId="acknowledge" labelText="Agree few legal stuff..">
          <input type="checkbox"  id="acknowledge" checked={offerData.acknowledge} 
           onChange={(event) => this.TermnsAndConditionsAgreed(event.target.checked)} /> 
          </LabelWrapper>
        </fieldset>
        <button type="button" className="btn btn-success" disabled={!this.CanSubmit()} onClick={this.saveOffer}>Save</button>
        <button type="button" className="btn btn-basic">Cancel</button>

      </div>
    );
  }
}

export default MaintainOffer;
