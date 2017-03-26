import React from 'react';
import Offer from './offer';
import Location from './location';
import _ from 'lodash';
import OfferService from '../../services/offerService';

import {PanelGroup, Panel} from 'react-bootstrap';
class MaintainOffer extends React.Component {
  constructor() {
    super();
    this.state = { offer: {medicineName : "Panadol", expiry_date: "2012-04-23", agreed : true, "quantity" : 13} };
    this.offerUpdated =  this.offerUpdated.bind(this); 

    this.handleSelect =  this.handleSelect.bind(this); 
    this.loadMap =  this.loadMap.bind(this); 
 
  }

  loadMap = () => {
      var mapComponent = <h1>ji</h1>;// <Location location={this.state.location} onUpdate={this.locationUpdate} />;
      this.setState({  mapComponent});
  }
  

  handleSelect = (activeKey) => {
    this.setState({ activeKey });
  }

   offerUpdated(data){
      data.offer.Id = _.uniqueId('offer_');
      OfferService.AddOffer(data.offer);
      this.setState({ "data" : data });
      this.setState({ activeKey : "location" });
  }

  render() {
    return (
        <div>
          <div className="row">
                <div className="col-md-12">
                    <h3>Add Donated Medicine</h3></div>
            </div>
      <PanelGroup activeKey={"location"} onSelect={this.handleSelect} accordion>
        <Panel header="Medicine Details" eventKey="offer">
            <Offer offer={this.state.offer} onUpdate={this.offerUpdated} />
        </Panel>
        <Panel header="Pickup Location" eventKey="location" onEntered={this.loadMap}>
            <h1>pick location</h1>
            { this.state.mapComponent}
        </Panel>
      </PanelGroup>
       <hr/>
                 <pre>{JSON.stringify(this.state.data, null, 2) }</pre>
      </div>
    );
  }
}

export default MaintainOffer;
