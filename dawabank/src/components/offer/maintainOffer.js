import React from 'react';
import {PanelGroup, Panel, Well, Collapse, Label} from 'react-bootstrap';
import _ from 'lodash';

import Medication from './partials/medication';
import Location from './partials/location';
import Acknowledge from './partials/acknowledge';

import OfferService from '../../services/offerService';

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
    let medication = this.state.data.product
      ? this.state.data.product.medication
      : null;

    return (
      <div className="row">
        <PanelGroup>
          <Panel header="Step 1 : Enter Medicine Details">
            <Medication product={this.state.data.product} onUpdate={this.offerUpdated}/> {(medication && <Collapse in={medication != null} timeout={1000}>
              <div className="col-sm-4">
                {(
                  <div className="well">
                    <p>{medication.trade_name}</p>
                    {medication.generic_name}<br/>
                    <Label
                      bsStyle={medication.product_control === "Controlled"
                      ? "danger"
                      : "success"}>
                      {medication.product_control}</Label><br/>
                    <Label>{medication.storage_conditions}</Label>
                  </div>
                )}
              </div>
            </Collapse>)}
          </Panel>

          <Panel header="Step 2 : Specify Pickup Location">
            <Location location={this.state.data.location} onChange={this.offerUpdated}/>
          </Panel>

          <Panel header="Step 3 : Specify Pickup Location">
            <Acknowledge
              acknowledge={this.state.data.acknowledge}
              onUpdate={this.offerUpdated}/>
            <button onClick={this.saveOffer}>Save</button>
          </Panel>
        </PanelGroup>
        
        <hr/>
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    );
  }
}

export default MaintainOffer;
