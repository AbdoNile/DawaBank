import React from 'react';
import _ from 'lodash';

import Medication from './partials/medication';
import Location from './partials/location';
import Acknowledge from './partials/acknowledge';

import OfferService from 'services/offerService';

class MaintainOffer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
    this.offerUpdated = this
      .offerUpdated
      .bind(this);
    this.toggleSections = this
      .toggleSections
      .bind(this);

  }

  toggleSections = (activeKey) => {
    this.setState({activeKey});
  }

  offerUpdated(data) {
    var newState = Object.assign({}, this.state.data, data);
    this.setState({"data": newState});
  }

  saveOffer = () => {
    let data = this.state.data;
    OfferService.AddOffer(data);
  }

  render() {
    
    return (
      <div className="row">
        	<h1 className="page-title"><i className="mIcon">&#xf158;</i>New Offer</h1>
	
          <fieldset>
          <legend>Step 1 : Enter Medicine Details </legend>
             <Medication product={this.state.data.product} onUpdate={this.offerUpdated}/> 
          </fieldset>

          <fieldset>
          <legend>Step 2 : Specify Pickup Location </legend>
             <Location location={this.state.data.location} onChange={this.offerUpdated}/>
          </fieldset>

          <fieldset>
          <legend>Step 3 : Specify Pickup Location </legend>
            <Acknowledge  acknowledge={this.state.data.acknowledge} onUpdate={this.offerUpdated}/>
          </fieldset>
          <button type="button" className="btn btn-success" onClick={this.saveOffer}>Save</button>
			    <button type="button" className="btn btn-basic">Cancel</button>
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    );
  }
}

export default MaintainOffer;
