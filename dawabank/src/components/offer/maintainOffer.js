import React from 'react';

import Medication from './partials/medication';
import SelectLocation from './partials/selectLocation';
import Acknowledge from './partials/acknowledge';

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
          <Acknowledge acknowledge={offerData.acknowledge} onUpdate={this.offerUpdated} />
        </fieldset>
        <button type="button" className="btn btn-success" onClick={this.saveOffer}>Save</button>
        <button type="button" className="btn btn-basic">Cancel</button>

      </div>
    );
  }
}

export default MaintainOffer;
