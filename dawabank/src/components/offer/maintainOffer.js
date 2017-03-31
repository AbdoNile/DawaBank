import React from 'react';
import Offer from './offer';
import Location from './location';
import Acknowledge from './acknowledge';
import _ from 'lodash';
import OfferService from '../../services/offerService';

import {PanelGroup, Panel, Well} from 'react-bootstrap';
class MaintainOffer extends React.Component {
  constructor() {
    super();
    this.state = {data :  { 
      offer: {medicineName : "Panadol", expiry_date: "2012-04-23", agreed : true, "quantity" : 13},
      location : { coordinates : {}},
      acknowledge : {}
     } };
    this.offerUpdated =  this.offerUpdated.bind(this); 

    this.toggleSections =  this.toggleSections.bind(this); 
    this.loadMap =  this.loadMap.bind(this); 
 
  }

  loadMap = () => {
      var mapComponent = <Location location={this.state.data.location} onUpdate={this.locationUpdated} />;
      this.setState({  mapComponent});
  }
  

  toggleSections = (activeKey) => {
    this.setState({ activeKey });
  }

  offerUpdated(data){
      var newState = Object.assign({}, this.state.data, data );
      this.setState({ "data" : newState });
  }

  locationUpdated = (data) => {
      var newState = Object.assign({}, this.state.data, data );
      this.setState({ "data" : newState });
  }

  saveOffer = () =>
  {
      var data = this.state.data;
      var offer = data.offer;
      offer.Id = _.uniqueId('offer_');
      offer.location = data.Location;
      OfferService.AddOffer(data);
  }



  render() {
    return (
        <div>
          <div className="row">
                <div className="col-md-12">
                    <h3>Add Donated Medicine</h3></div>
            </div>
      <PanelGroup  >
        <Panel header="Step 1 : Enter Medicine Details" >
            <Offer offer={this.state.data.offer} onUpdate={this.offerUpdated} />
        </Panel>
        <Panel header="Step 2 : Specify Pickup Location">
            <Location location={this.state.data.location} onUpdate={this.locationUpdated} />
        </Panel>
         <Well >
            <Acknowledge acknowledge={this.state.data.acknowledge} onUpdate={this.locationUpdated} />
           <button onClick={this.saveOffer}>Save</button>
        </Well>
      </PanelGroup>
       <hr/>
                 <pre>{JSON.stringify(this.state.data, null, 2) }</pre>
      </div>
    );
  }
}

export default MaintainOffer;
