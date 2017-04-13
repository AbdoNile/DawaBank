import React from 'react';
import Offer from './offer';
import Location from './location';
import Acknowledge from './acknowledge';
import _ from 'lodash';
import OfferService from '../../services/offerService';

import {PanelGroup, Panel, Well, Collapse, Label} from 'react-bootstrap';
class MaintainOffer extends React.Component {
  constructor() {
    super();
    this.state = {data :  {} };
    this.offerUpdated =  this.offerUpdated.bind(this); 
    this.toggleSections = this.toggleSections.bind(this); 
   // this.loadMap =  this.loadMap.bind(this); 
 
  }


		  
    // loadMap = () => {		
    //     var mapComponent = <Location location={this.state.data.location} onUpdate={this.locationUpdated} />;		
    //     this.setState({  mapComponent});		
    // }		

  toggleSections = (activeKey) => {
    this.setState({ activeKey });
  }

  offerUpdated(data){
      var newState = Object.assign({}, this.state.data, data );
      this.setState({ "data" : newState });
  }
  
  saveOffer = () =>
  {
      let data =   this.state.data;
      OfferService.AddOffer(data);
  }

  render() {
    let medication = this.state.data.product ? this.state.data.product.medication : null;
        
    return (
        <div className="row">
          
            <PanelGroup>
                <Panel header="Step 1 : Enter Medicine Details" >
                    <Offer product={this.state.data.product} onUpdate={this.offerUpdated} />
                    {( medication && 
                    <Collapse in={medication != null} timeout={1000} >
                    <div className="col-sm-4">
                            {(
                            <div className="well">
                                <p>{medication.trade_name}</p>
                                 {medication.generic_name}<br/>
                                 <Label bsStyle={medication.product_control === "Controlled" ? "danger" : "success"} >
                                     {medication.product_control}</Label><br/>
                                <Label>{medication.storage_conditions}</Label>
                            </div>
                            )}
                        </div></Collapse>)}
                </Panel>
                <Panel header="Step 2 : Specify Pickup Location">
                    <Location location={this.state.data.location} onChange={this.offerUpdated} />
                </Panel>
                <Well >
                    <Acknowledge acknowledge={this.state.data.acknowledge} onUpdate={this.offerUpdated} />
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
