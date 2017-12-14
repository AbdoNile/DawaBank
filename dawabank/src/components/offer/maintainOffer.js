import React from 'react';

import Medication from './partials/medication';
import Location from './partials/location';
import Acknowledge from './partials/acknowledge';

import OfferService from 'services/offerService';

class MaintainOffer extends React.Component {
  constructor() {
    super();
    this.currentValue = {};
    this.offerUpdated = this.offerUpdated.bind(this);
    this.toggleSections = this.toggleSections.bind(this);
  }

  toggleSections = (activeKey) => {
    this.setState({activeKey});
  }

  offerUpdated(data) {
    var newState = Object.assign({}, this.currentValue.data, data);
    this.currentValue = {"data": newState};
    console.log(newState);
  }

  componentDidMount = () => {
    if(this.props.match.params.id != null){
      OfferService.Get(this.props.match.params.id).then(offer => {
        this.setState({ "data" : offer});
        this.currentValue = {"data": offer};
        
      });
      
    }
  }

  saveOffer = () => {
    let data = this.currentValue.data;
    OfferService.AddOffer(data).then(result => {
      this.props.history.push('/MyOffers');
    });
  }

  render() {
    var offerData = this.state != null && this.state.data != null ? this.state.data : {};
    return (
      <div className="row">
          <h1 className="page-title"><i className="mIcon">&#xf158;</i>New Offer</h1>
	
          <fieldset>
          <legend>Step 1 : Enter Medicine Details </legend>
             <Medication product={offerData.donation} onUpdate={this.offerUpdated}/> 
          </fieldset>

          <fieldset>
          <legend>Step 2 : Specify Pickup Location </legend>
             <Location location={offerData.pickupLocation} onUpdate={this.offerUpdated}/>
          </fieldset>

          <fieldset>
          <legend>Step 3 : Specify Pickup Location </legend>
            <Acknowledge  acknowledge={offerData.acknowledge} onUpdate={this.offerUpdated}/>
          </fieldset>
          <button type="button" className="btn btn-success" onClick={this.saveOffer}>Save</button>
			    <button type="button" className="btn btn-basic">Cancel</button>
      
      </div>
    );
  }
}

export default MaintainOffer;
