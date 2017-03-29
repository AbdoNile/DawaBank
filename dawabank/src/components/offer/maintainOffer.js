import React from 'react';
import Offer from './offer';
import Location from './location';
import _ from 'lodash';
import OfferService from '../../services/offerService';

import {PanelGroup, Panel} from 'react-bootstrap';
class MaintainOffer extends React.Component {
  constructor() {
    super();
    this.state = {data :  { 
      offer: {medicineName : "Panadol", expiry_date: "2012-04-23", agreed : true, "quantity" : 13},
      contactDetails : { coordinates : {}}
     } };
    this.offerUpdated =  this.offerUpdated.bind(this); 

    this.toggleSections =  this.toggleSections.bind(this); 
    this.loadMap =  this.loadMap.bind(this); 
 
  }

  loadMap = () => {
      var mapComponent = <Location contactDetails={this.state.data.contactDetails} onUpdate={this.locationUpdated} />;
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
      <PanelGroup activeKey={this.state.activeKey} onSelect={this.toggleSections} accordion>
        <Panel header="Step 1 : Enter Medicine Details" eventKey="offer">
            <Offer offer={this.state.data.offer} onUpdate={this.offerUpdated} />
        </Panel>
        <Panel header="Step 2 : Specify Pickup Location" eventKey="location" onEntered={this.loadMap}>
            {this.state.mapComponent}
        </Panel>
         <Panel header="Step 3 : Review and Confirm" eventKey="confirm" >
           <h1 >Thank you ! </h1>
           <button onClick={this.saveOffer}>Save</button>
        </Panel>
      </PanelGroup>
       <hr/>
                 <pre>{JSON.stringify(this.state.data, null, 2) }</pre>
      </div>
    );
  }
}

export default MaintainOffer;